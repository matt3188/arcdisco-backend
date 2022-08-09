module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'arcdisco-db'),
      user: env('DATABASE_USERNAME', 'arcdisco-admin'),
      password: env('DATABASE_PASSWORD', 'Sparkymlc3188!'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
