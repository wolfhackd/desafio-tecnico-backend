import type { OrdersDTO } from "./Orders.dto.js";

export interface ListOrdersResponseDTO {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  orders: OrdersDTO[];
}