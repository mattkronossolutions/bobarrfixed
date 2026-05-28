import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig() || {};
const host = typeof window === 'undefined' ? 'api' : window.location.hostname;
export const apiURL =
  publicRuntimeConfig?.WEB_UI_API_URL || `http://${host}:4000`;
