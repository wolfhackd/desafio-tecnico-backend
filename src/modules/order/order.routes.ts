import { Router } from 'express';
import { advanceOrderState, createOrder, listOrders } from './order.controller.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';

const orderRoutes = Router();

orderRoutes.post('/',authMiddleware, createOrder);
orderRoutes.get('/', authMiddleware, listOrders);
orderRoutes.patch('/:id/advance', authMiddleware, advanceOrderState);

export default orderRoutes;
