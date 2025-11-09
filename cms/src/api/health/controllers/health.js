'use strict';

module.exports = {
  async index(ctx) {
    // минимальный ответ
    const payload = {
      ok: true,
      env: process.env.NODE_ENV || 'development',
      uptime: Math.round(process.uptime()), // сек
      timestamp: new Date().toISOString(),
    };

    // опционально: проверка БД (Postgres/Knex)
    try {
      if (strapi.db?.connection?.raw) {
        await strapi.db.connection.raw('select 1');
        payload.db = 'ok';
      }
    } catch (e) {
      payload.db = 'fail';
    }

    ctx.set('Cache-Control', 'no-store');
    ctx.body = payload;
  },
};
