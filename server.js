import express from 'express';
import renderApi from '@api/render-api';

const app = express();

renderApi.auth(process.env.RENDER_API_KEY);

  app.get('/services', async (req, res) => {
  try {
    const { data } = await renderApi.listServices({
      includePreviews: 'true',
      limit: '20',
    });

    res.json(data);
  } catch {
    res.status(502).json({ error: 'Could not list Render services' });
  }
});
app.listen(process.env.PORT || 3000);