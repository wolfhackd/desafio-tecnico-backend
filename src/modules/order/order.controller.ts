import type { Request, Response } from "express";
import { createOrderService } from "../../services/order/createOrderService.js";

import { listOrdersService } from "../../services/order/listOrderService.js";
import type { ListOrdersDTO } from "../../dtos/Order/FilterOrder.dto.js";
import type { CreateOrderDTO } from "../../dtos/Order/CreateOrder.dto.js";
import { advanceOrderStateService } from "../../services/order/advanceOrderStateService.js";



  export const createOrder = async (req: Request, res: Response)=>{
    try{
    const { lab, patient, customer, services } = req.body as CreateOrderDTO;

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

export const listOrders = async (req: Request, res: Response) => {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const page = req.query.page ? Number(req.query.page) : 1;

    const state = req.query.state as string | undefined;

    if (limit <= 0 || page <= 0) {
      return res.status(400).json({
        message: 'limit and page must be greater than 0',
      });
    }

    const payload: ListOrdersDTO = {
      limit,
      page,
      ...(state && { state }),
    };

    const orders = await listOrdersService(payload);

    return res.status(200).json(orders);
  } catch (e: any) {
    return res.status(500).json({
      message: e.message || 'Internal server error',
    });
  }
};

export const advanceOrderState = async (req: Request, res: Response)=>{
  try{
      const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Order id is required' });
  }

  const order = await advanceOrderStateService(id);

  return res.status(200).json(order);
  }catch(e:any){
    return res.status(500).json({
      message: e.message || 'Internal server error',
    });
  }
}