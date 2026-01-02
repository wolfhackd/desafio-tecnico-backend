import type { OrderServiceDTO } from "./OrderService.dto.js";

export interface OrdersDTO {
  
  _id: string;
  lab: string;
  patient: string;
  customer: string;
  state: 'CREATED' | 'ANALYSIS' | 'COMPLETED';
  status: 'ACTIVE' | 'DELETED';
  services: OrderServiceDTO[];
  createdAt: string;
  updatedAt: string;
}