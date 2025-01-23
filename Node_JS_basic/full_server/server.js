import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = 1245;

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
