export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const error = url.searchParams.get('error');

  if (error) {
    console.error('OAuth error:', error);
    return Response.redirect(`${url.origin}/admin/#error=${error}`, 302);
  }

  if (!code) {
    console.error('No authorization code received');
    return Response.redirect(`${url.origin}/admin/#error=no_code`, 302);
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code: code,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      console.error('Token exchange error:', tokenData.error_description);
      return Response.redirect(
        `${url.origin}/admin/#error=${tokenData.error}`,
        302
      );
    }

    // Redirect back to admin with token as URL fragment (for security)
    const adminUrl = new URL('/admin/', url.origin);
    adminUrl.hash = `access_token=${tokenData.access_token}&token_type=bearer`;

    return Response.redirect(adminUrl.toString(), 302);
  } catch (error) {
    console.error('Callback error:', error);
    return Response.redirect(`${url.origin}/admin/#error=callback_failed`, 302);
  }
}
