// ESM!
export default {
  async index(ctx) {
    const payload = {
      ok: true,
      env: process.env.NODE_ENV || 'development',
      uptime: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    };
    try {
      if (strapi.db?.connection?.raw) {
        await strapi.db.connection.raw('select 1');
        payload.db = 'ok';
      }
    } catch { payload.db = 'fail'; }
    ctx.set('Cache-Control', 'no-store');
    ctx.body = payload;
  },
};
