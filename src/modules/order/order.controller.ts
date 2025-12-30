import type { Request, Response } from "express";
import { createOrderService } from "../../service/order/createOrderService.js";
import type { CreateOrderInput } from "../../dtos/order.dto.js";

export const createOrder = async (req: Request, res: Response)=>{
  try{
   const { lab, patient, customer, services } = req.body as CreateOrderInput;

    if (!lab || !patient || !customer) {
      return res.status(400).json({
        message: 'lab, patient and customer are required',
      });
    }

    if (!services || services.length === 0) {
      return res.status(400).json({
        message: 'Order must have at least one service',
      });
    }

    const newOrder = await createOrderService({lab, patient, customer, services});

    return res.status(201).json(newOrder);


  }catch(e:any){
    return res.status(500).json({
      message: e.message || 'Internal server error',
    });
  }
}