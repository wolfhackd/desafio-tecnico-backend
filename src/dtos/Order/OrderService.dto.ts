export interface OrderServiceDTO {
  name: string;
  value: number;
  status: 'PENDING' | 'DONE';
}
