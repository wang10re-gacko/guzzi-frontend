export interface Pagination {
  pagination: {
    page: number;
    size: number;
    totalElements: number;
    startIdx: number;
    endIdx: number;
    totalPages: number;
  };
}
