import express from 'express';
import cors from 'cors';

import classifyNumberRoute from './routes/classify-number-route';

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

app.use('/api/classify-number', classifyNumberRoute);

app.listen(PORT, () => {
  console.log(`Server running on localhost: ${PORT}`);
});
