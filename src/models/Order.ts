import { Schema, model, Document } from 'mongoose';

export interface IService {
  name: string;
  value: number;
  status: 'PENDING' | 'DONE';
}

export interface IOrder extends Document {
  lab: string;
  patient: string;
  customer: string;
  state: 'CREATED' | 'ANALYSIS' | 'COMPLETED';
  status: 'ACTIVE' | 'DELETED';
  services: IService[];
}

const ServiceSchema = new Schema<IService>(
  {
    name: { type: String, required: true },
    value: { type: Number, required: true },
    status: {
      type: String,
      enum: ['PENDING', 'DONE'],
      default: 'PENDING',
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
      enum: ['CREATED', 'ANALYSIS', 'COMPLETED'],
      default: 'CREATED',
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'DELETED'],
      default: 'ACTIVE',
    },
    services: {
      type: [ServiceSchema],
      required: true,
    },
  },
  { timestamps: true },
);

export const Order = model<IOrder>('Order', OrderSchema);
