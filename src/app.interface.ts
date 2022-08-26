export interface IRepositorie {
  id: number;
  state: number;
}
export interface IResponseVerification {
  repositories: IRepositorie[];
}
