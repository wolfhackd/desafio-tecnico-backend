import type { IOrder } from "../models/Order.js";


export interface ListOrdersResponseDTO {
  total: number;
  orders: IOrder[];
}