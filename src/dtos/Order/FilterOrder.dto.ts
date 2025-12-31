export interface ListOrdersDTO {
  limit: number;
  state?: 'CREATED' | 'ANALYSIS' | 'COMPLETED';
}