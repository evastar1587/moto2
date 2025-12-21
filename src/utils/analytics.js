export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: path });
  }
};

export const trackEvent = (eventName, eventData = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};
