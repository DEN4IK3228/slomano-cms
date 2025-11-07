// cms/config/database.ts
export default ({ env }) => {
  const isPg = !!env('DATABASE_URL'); // если есть строка подключения — используем Postgres

  if (isPg) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: { rejectUnauthorized: false }, // Render/Neon требуют SSL
        },
      },
    };
  }

  // fallback для локалки на sqlite
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};
