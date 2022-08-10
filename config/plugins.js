module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
    config: {
      serverPublicHostname: env("SERVER_PUBLIC_HOSTNAME"),
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
        testAddress: env("EMAIL_TEST_ADDRESS"),
      },
    },
  },
});
