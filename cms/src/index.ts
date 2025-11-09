// cms/src/index.ts
export default {
  register({ strapi }) {
    strapi.server.routes([
      {
        method: 'GET',
        path: '/healthx',                 // URL будет /api/healthx при дефолтном префиксе
        handler: (ctx) => {
          const payload: any = {
            ok: true,
            env: process.env.NODE_ENV || 'development',
            uptime: Math.round(process.uptime()),
            timestamp: new Date().toISOString(),
          };
          // лёгкая проверка базы (необязательно)
          try {
            // @ts-ignore
            if (strapi.db?.connection?.raw) {
              // @ts-ignore
              strapi.db.connection.raw('select 1');
              payload.db = 'ok';
            }
          } catch { payload.db = 'fail'; }
          ctx.set('Cache-Control', 'no-store');
          ctx.body = payload;
        },
        config: { auth: false },
      },
    ]);
  },
};
