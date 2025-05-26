const { createServer } = require('http');
const next = require('next');
const path = require('path');

// cPanel-specific configurations
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
const host = process.env.HOST || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const dev = process.env.NODE_ENV !== 'production';

console.log('cPanel Next.js server starting...');
console.log('Host:', host);
console.log('Port:', port);
console.log('Environment:', process.env.NODE_ENV);
console.log('App directory:', __dirname);

// Handle cPanel subdirectory deployments
const basePath = process.env.BASE_PATH || '';

const app = next({
  dev,
  dir: __dirname,
  conf: {
    // Handle cPanel subdirectory if needed
    basePath: basePath,
    assetPrefix: basePath,
  },
});

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    console.log('Next.js app prepared for cPanel');

    const server = createServer(async (req, res) => {
      try {
        // Handle cPanel proxy headers
        if (req.headers['x-forwarded-proto'] === 'https') {
          req.connection.encrypted = true;
        }

        await handle(req, res);
      } catch (err) {
        console.error('Request handling error:', err);
        res.statusCode = 500;
        res.end('Server Error');
      }
    });

    // Listen on the host specified by cPanel
    server.listen(port, host, err => {
      if (err) {
        console.error('Failed to start server:', err);
        throw err;
      }
      console.log(`> Server ready on http://${host}:${port}`);
      console.log(`> Environment: ${process.env.NODE_ENV}`);
    });

    // Handle cPanel process management
    process.on('SIGTERM', () => {
      console.log('Received SIGTERM, shutting down gracefully');
      server.close(() => {
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      console.log('Received SIGINT, shutting down gracefully');
      server.close(() => {
        process.exit(0);
      });
    });
  })
  .catch(err => {
    console.error('Failed to prepare Next.js app:', err);
    console.error('This might be a cPanel-specific issue. Check:');
    console.error('1. Node.js version compatibility');
    console.error('2. All dependencies installed');
    console.error('3. App built for production');
    console.error('4. Correct file permissions');
    process.exit(1);
  });

// Export for cPanel if needed
module.exports = app;
