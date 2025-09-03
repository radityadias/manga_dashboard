import express from 'express';
import cors from 'cors';

import { errorHandler } from "./middlewares/errorHandler.js";
import dashboard from "./routes/dashboards/dashboard.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use('/titles', dashboard);
app.use(errorHandler);

export default app;