module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1c5e6975b0bc5a477c5bd0cc80e497f2'),
    watchIgnoreFiles: ['**/config/sync/**',],
  },
});
