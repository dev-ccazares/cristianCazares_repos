export class ErrorResponse {
  status: number;
  title: string;
  type: string;
  detail: Record<string, any>;
  path: string;

  constructor(
    status: number,
    title: string,
    type: string,
    detail: Record<string, any>,
    path: string,
  ) {
    this.status = status;
    this.title = title;
    this.type = type;
    this.detail = detail;
    this.path = path;
  }
}
