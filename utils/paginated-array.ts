export class PaginatedArray<T> extends Array<T> {
  pageSize: number;
  items: Array<T>;
  pageIndex: number;
  totalPages: number;
  
  constructor(items: Array<T>, pageIndex: number, pageSize: number) {
    super();

    this.pageSize = pageSize;
    this.items = items;

    this.pageIndex = pageIndex;
    this.totalPages = Math.ceil(items.length / pageSize);   
    
    this.push(...items.slice((pageIndex - 1) * pageSize).slice(0, pageSize));
  }

  public get hasFurtherPreviousPage() {
    return this.pageIndex > 2;
  }

  public get hasPreviousPage() {
    return this.pageIndex > 1;
  }

  public get hasNextPage() {
    return this.pageIndex < this.totalPages;
  }

  public get hasFurtherNextPage() {
    return this.pageIndex < this.totalPages - 1;
  }

  public get furtherPreviousPage() {
    return this.pageIndex - 2;
  }

  public get previousPage() {
    return this.pageIndex - 1;
  }

  public get nextPage() {
    return this.pageIndex + 1;
  }

  public get furtherNextPage() {
    return this.pageIndex + 2;
  }
}