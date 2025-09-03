import { Router } from 'express';
import { getLatestUpdates } from "../../controllers/dashboards/latest-updates.js";

const router = Router();

router.get('/updates', getLatestUpdates);

export default router;




