export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const error = url.searchParams.get('error');

  if (error) {
    console.error('OAuth error:', error);
    return Response.redirect(`${url.origin}/admin/?error=${error}`, 302);
  }

  if (!code) {
    console.error('No authorization code received');
    return Response.redirect(`${url.origin}/admin/?error=no_code`, 302);
  }

  // Redirect back to admin with code - Decap CMS will handle the token exchange
  const adminUrl = new URL('/admin/', url.origin);
  adminUrl.searchParams.set('code', code);
  if (state) {
    adminUrl.searchParams.set('state', state);
  }

  return Response.redirect(adminUrl.toString(), 302);
}
