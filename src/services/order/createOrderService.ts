
import type { CreateOrderDTO } from "../../dtos/Order/CreateOrder.dto.js";
import { Order } from "../../models/Order.js";



export const createOrderService = async ({lab, patient, customer, services}: CreateOrderDTO) =>{

  for (const service of services) {
    if (!service.name) {
      throw new Error('Service name is required');
    }

    if (service.value === undefined || service.value === null) {
      throw new Error('Service value is required');
    }

    if (service.value <= 0) {
      throw new Error('Service value must be greater than 0');
    }
  }

  const createdOrder = await Order.create({
    lab,
    patient,
    customer,
    services
  })

  return createdOrder;
  
}