import { Router } from 'express';
import { advanceOrderState, createOrder, listOrders } from './order.controller.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';

const orderRoutes = Router();

orderRoutes.post('/',authMiddleware, createOrder);
orderRoutes.get('/', authMiddleware, listOrders);
orderRoutes.patch('/:id/advance', authMiddleware, advanceOrderState);

// PATCH /orders/:id/advance
// Endpoint PATCH /orders/:id/advance.
// A transição deve respeitar a ordem estrita: CREATED -> ANALYSIS -> COMPLETED.
// Bloquear tentativas de pular etapas ou retroceder.

export default orderRoutes;
