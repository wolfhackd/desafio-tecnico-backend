export interface IServiceInput {
  name: string;
  value: number;
}

export interface CreateOrderInput {
  lab: string;
  patient: string;
  customer: string;
  services: IServiceInput[];
}