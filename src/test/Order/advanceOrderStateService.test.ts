import {describe, vi, it, afterEach, expect} from 'vitest'

vi.mock('../../models/Order.js', () => ({
   OrderState: {
    CREATED: 'CREATED',
    ANALYSIS: 'ANALYSIS',
    COMPLETED: 'COMPLETED',
  },
  Order: {
    findById: vi.fn()
  }
}))

import { Order, OrderState } from '../../models/Order.js'
import { advanceOrderStateService } from '../../services/order/advanceOrderStateService.js';

describe('advanceOrderStateService', () => {

  afterEach(() => {
vi.clearAllMocks();
});

  it('should advance CREATED to ANALYSIS', async ()=>{
    const saveMock = vi.fn();

    (Order.findById as any).mockResolvedValue({
      state: OrderState.CREATED,
      save: saveMock
    })

    const result = await advanceOrderStateService('orderID');

    expect(saveMock).toHaveBeenCalled();
    expect(result).toBe('Order id: orderID advance to state: ANALYSIS');
  })

  it('should advance ANALYSIS to COMPLETED', async ()=>{
    const saveMock = vi.fn();

    (Order.findById as any).mockResolvedValue({
      state: OrderState.ANALYSIS,
      save: saveMock
    })

    const result = await advanceOrderStateService('orderID');

    expect(saveMock).toHaveBeenCalled();
    expect(result).toBe('Order id: orderID advance to state: COMPLETED');
  })

  it('should throw error if order is already COMPLETED', async () => {
  (Order.findById as any).mockResolvedValue({
    state: OrderState.COMPLETED,
  });

  await expect(
    advanceOrderStateService('order-id')
  ).rejects.toThrow('Order already completed');
});
})