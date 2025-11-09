'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/health',            // конечная точка будет /api/health
      handler: 'health.index',
      config: {
        auth: false,              // публично, без JWT/ролей
        policies: [],
        middlewares: [],
      },
    },
  ],
};
