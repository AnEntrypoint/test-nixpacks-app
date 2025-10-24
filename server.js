const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Test Nixpacks App</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; background: #f0f0f0; }
          .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
          .status { color: green; font-weight: bold; }
          .info { background: #e7f3ff; padding: 10px; border-radius: 4px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Test Nixpacks Application</h1>
          <p class="status">✅ Successfully deployed with nixpacks!</p>
          <div class="info">
            <strong>Deployment Info:</strong><br>
            - Built with: Nixpacks<br>
            - Platform: Node.js<br>
            - Framework: Express<br>
            - Deployment time: ${new Date().toISOString()}<br>
            - Hostname: ${req.hostname}<br>
            - User Agent: ${req.get('User-Agent')}
          </div>
          <h2>Environment Variables</h2>
          <pre>${JSON.stringify(process.env, null, 2)}</pre>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
