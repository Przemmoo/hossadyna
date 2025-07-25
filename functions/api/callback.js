export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  
  // Przekieruj z powrotem do admin z kodem
  const adminUrl = new URL('/admin/', url.origin);
  if (code) {
    adminUrl.searchParams.set('code', code);
  }
  if (state) {
    adminUrl.searchParams.set('state', state);
  }
  
  return Response.redirect(adminUrl.toString(), 302);
}
