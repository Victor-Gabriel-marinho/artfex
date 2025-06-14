import express from 'express';

// importando controllers
import { pagamento } from '../controllers/payment_comands.js';

const payment_router = express.Router();

//rota para criar um pagamento
payment_router.post('/pagamento', pagamento);

export default payment_router;
