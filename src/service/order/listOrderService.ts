import type { ListOrdersDTO } from "../../dtos/FilterOrder.dto.js";
import type { ListOrdersResponseDTO } from "../../dtos/FilterOrderResponse.dto.js";
import { Order } from "../../models/Order.js";



export const listOrdersService = async (
  { limit, state }: ListOrdersDTO
): Promise<ListOrdersResponseDTO> => {

  const filters: Record<string, any> = {};

  const allowedStates = ['CREATED', 'ANALYSIS', 'COMPLETED'] as const;

  if (state) {
    const normalizedState = state.toUpperCase();

    if (!allowedStates.includes(normalizedState as any)) {
      throw new Error('Invalid state filter(CREATED, ANALYSIS, COMPLETED)');
    }

    filters.state = normalizedState;
  }

  const ordersTotal = await Order.countDocuments(filters);

  const orders = await Order
    .find(filters)
    .limit(limit ?? 10);

  return {
    total: ordersTotal,
    orders,
  };
};