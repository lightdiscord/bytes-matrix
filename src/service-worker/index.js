/* eslint-disable no-console */

import { register as registerSW } from 'register-service-worker';

export const register = () => {
  if (process.env.NODE_ENV !== 'production') return;

  const ready = () => {
    const lines = [
      'App is being served from cache by a service worker.',
      'For more details, visit https://goo.gl/AFskqB',
    ].join('\n');

    console.log(lines);
  };

  const cached = () => {
    console.log('Content has been cached for offline use.');
  };

  const updated = () => {
    console.log('New content is available; please refresh.');
  };

  const offline = () => {
    console.log('No internet connection found. App is running in offline mode.');
  };

  const error = (error) => {
    console.error('Error during service worker registration:', error);
  };

  registerSW(`${process.env.BASE_URL}service-worker.js`, {
    ready,
    cached,
    updated,
    offline,
    error,
  });
};
