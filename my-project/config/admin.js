module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c2c8afc51aa2dc11a6eae66b3b1a9a8'),
  },
});
