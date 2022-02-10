module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ddaf79a323f1fdbf7718fe8a0a3b1865'),
  },
});
