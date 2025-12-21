export const config = {
  api: {
    url: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  },
  features: {
    auth: import.meta.env.VITE_ENABLE_AUTH === 'true',
    messaging: import.meta.env.VITE_ENABLE_MESSAGING === 'true',
  },
  external: {
    mopedDivisionAffiliateId: import.meta.env.VITE_MOPED_DIVISION_AFFILIATE_ID,
    mapboxToken: import.meta.env.VITE_MAPBOX_TOKEN,
  },
};
