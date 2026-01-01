import { Order, OrderState } from "../../models/Order.js";

export const advanceOrderStateService = async (id: string) => {
  const order = await Order.findById(id);

  if (!order) {
    throw new Error('Order not found');
  }

  switch (order.state) {
    case OrderState.CREATED:
      order.state = OrderState.ANALYSIS;
      break;

    case OrderState.ANALYSIS:
      order.state = OrderState.COMPLETED;
      break;

    case OrderState.COMPLETED:
      throw new Error('Order already completed');

    default:
      throw new Error('Invalid order state');
  }

  await order.save();

  return (`Order id: ${id} advance to state: ${order.state}`);
};
