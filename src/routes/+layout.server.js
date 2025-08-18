export function load({ locals }) {
  const userAgent = locals.userAgent;
  const lang = locals.lang
  const uid = locals.uid
  const isDesktop = locals.isDesktop
  const un = locals.un
  const email = locals.email
  return {
    email,
    isDesktop,
    userAgent,
    lang,
    uid,
    un
  };
}