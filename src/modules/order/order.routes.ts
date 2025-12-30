import { Router } from 'express';
import { createOrder } from './order.controller.js';

const orderRoutes = Router();


//Usar Middleware
orderRoutes.post('/', createOrder);
// orderRoutes.post('/', loginUser);


export default orderRoutes;
