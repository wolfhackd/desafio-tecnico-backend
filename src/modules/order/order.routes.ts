import { Router } from 'express';
import { createOrder, listOrders } from './order.controller.js';

const orderRoutes = Router();


//Usar Middleware
orderRoutes.post('/', createOrder);
orderRoutes.get('/', listOrders);


export default orderRoutes;
