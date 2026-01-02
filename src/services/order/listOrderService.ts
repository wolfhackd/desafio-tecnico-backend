import type { FilterOrdersDTO } from '../../dtos/Order/FilterOrder.dto.js';
import type { ListOrdersResponseDTO } from '../../dtos/Order/ListOrderResponse.dto.js';
import { Order, OrderState } from '../../models/Order.js';

export const listOrdersService = async (
  { limit, page, state }: FilterOrdersDTO
): Promise<ListOrdersResponseDTO> => {

  const filters: Record<string, any> = {};

  const allowedStates = ['CREATED', 'ANALYSIS', 'COMPLETED'] as const;

  if (state) {
    const normalizedState = state.toUpperCase();

    if (!allowedStates.includes(normalizedState as any)) {
      throw new Error('Invalid state filter (CREATED, ANALYSIS, COMPLETED)');
    }

    filters.state = normalizedState;
  }

  const total = await Order.countDocuments(filters);

  const orders = await Order.find(filters)
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  return {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    orders,
  };
};