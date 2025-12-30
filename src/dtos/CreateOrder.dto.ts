export interface CreateOrderDTO {
  lab: string;
  patient: string;
  customer: string;
  services: {
    name: string;
    value: number;
  }[];
}