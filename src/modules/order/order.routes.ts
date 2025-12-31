import { Router } from 'express';
import { createOrder, listOrders } from './order.controller.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';

const orderRoutes = Router();

orderRoutes.post('/',authMiddleware, createOrder);
//Falta aplicar os filtros
orderRoutes.get('/',authMiddleware, listOrders);

export default orderRoutes;
