export interface IRepositorie {
  id: number;
  state: number;
  name: string;
}
export interface IResponseVerification {
  repositories: IRepositorie[];
}
