import type { ListOrdersDTO } from "../../dtos/FilterOrder.dto.js";
import type { ListOrdersResponseDTO } from "../../dtos/FilterOrderResponse.dto.js";
import { Order } from "../../models/Order.js";



export const listOrdersService = async ({limit, state}: ListOrdersDTO):Promise<ListOrdersResponseDTO> =>{

 const filters: any = {};

 if (state) {
    filters.state = state;
  }
  
  const ordersTotal = await Order.find().countDocuments();
  const orders = await Order.find(filters).limit(limit || 10);

  const result = {
    total: ordersTotal,
    orders
  }

  // return orders;
  return result;
  
}