import express from 'express';
import { pagamento } from '../controllers/payment_comands';

const router = express.Router();

router.post('/pagamento', pagamento);

export default router;
