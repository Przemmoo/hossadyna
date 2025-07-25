export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Client ID ze zmiennych środowiskowych
  const clientId = env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response('GITHUB_CLIENT_ID not configured', { status: 500 });
  }

  const redirectUri = `${url.origin}/api/callback`;
  const state = url.searchParams.get('state') || 'random-state';

  // Redirect to GitHub OAuth
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo&state=${state}`;

  return Response.redirect(githubAuthUrl, 302);
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { code } = body;

    if (!code) {
      return new Response(JSON.stringify({ error: 'No code provided' }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
      });
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(
        JSON.stringify({ error: tokenData.error_description }),
        {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, OPTIONS'
          },
        }
      );
    }

    // Return token in format expected by Decap CMS
    return new Response(JSON.stringify({ 
      token: tokenData.access_token,
      provider: 'github'
    }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
    });
  } catch (error) {
    console.error('Auth error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
    });
  }
}

// Handle CORS preflight requests
export async function onRequestOptions(context) {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    }
  });
}
