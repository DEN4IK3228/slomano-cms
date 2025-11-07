export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'"],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'connect-src': ["'self'", 'https:', 'blob:', 'data:'],
          'script-src': ["'self'", 'https:', 'blob:', "'unsafe-inline'"],
          'style-src': ["'self'", 'https:', "'unsafe-inline'"],
          'frame-src': ["'self'", 'https:'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',

  // body — ВОТ ЗДЕСЬ
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '64mb',
      formLimit: '64mb',
      textLimit: '64mb',
      multipart: true, // не обязательно, но не повредит
    },
  },

  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
