import { Schema, model, Document } from 'mongoose';

export enum OrderState {
  CREATED = 'CREATED',
  ANALYSIS = 'ANALYSIS',
  COMPLETED = 'COMPLETED',
}

export enum OrderStatus {
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
}

export enum ServiceStatus {
  PENDING = 'PENDING',
  DONE = 'DONE',
}


export interface IService {
  name: string;
  value: number;
  status: ServiceStatus;
}

export interface IOrder {
  lab: string;
  patient: string;
  customer: string;
  state: OrderState;
  status: OrderStatus;
  services: IService[];
}

const ServiceSchema = new Schema<IService>(
  {
    name: { type: String, required: true },
    value: { type: Number, required: true },
    status: {
      type: String,
      enum: Object.values(ServiceStatus),
      default: ServiceStatus.PENDING,
    },
  },
  { _id: false },
);

const OrderSchema = new Schema<IOrder>(
  {
    lab: { type: String, required: true },
    patient: { type: String, required: true },
    customer: { type: String, required: true },
    state: {
      type: String,
      enum: Object.values(OrderState),
      default: OrderState.CREATED,
    },
    status: {
      type: String,
      enum: Object.values(OrderStatus),
      default: OrderStatus.ACTIVE,
    },
    services: {
      type: [ServiceSchema],
      required: true,
    },
  },
  { timestamps: true },
);

export const Order = model<IOrder>('Order', OrderSchema);
