const ACCOUNT_BASE = '/account';
const AUTH_BASE = '/auth';
const LEGAL_BASE = '/legal';
const SERVICES_BASE = "/services"

const routes = {
  home: '/',
  web: {
    about: '/about',
    careers: '/careers',
    blog: '/blog',
    contact: '/contact',
  },
  services: {
    base: SERVICES_BASE,
    homeCleaning: `${SERVICES_BASE}/home-cleaning`,
    commercial: `${SERVICES_BASE}/commercial`,
    endOfTenancy: `${SERVICES_BASE}/end-of-tenancy-cleaning`,
    ironing: `${SERVICES_BASE}/ironing`,  
  },
  account: {
    base: ACCOUNT_BASE,
    bookings: `${ACCOUNT_BASE}/bookings`,
    profile: `${ACCOUNT_BASE}/profile`,
  },
  auth: {
    base: AUTH_BASE,
    login: `${AUTH_BASE}/login`,
  },
  legal: {
    base: LEGAL_BASE,
    privacy: `${LEGAL_BASE}/privacy`,
    terms: `${LEGAL_BASE}/terms`,
    cookiePolicy: `${LEGAL_BASE}/cookie-policy`,
  }
};

export default routes
