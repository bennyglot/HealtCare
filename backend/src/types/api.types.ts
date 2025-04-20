export interface IFilter {
  filter: string;
  options: string[];
}
export interface IPaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    filters: IFilter[];
  }