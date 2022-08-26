export interface ITribe {
  id_tribe: number;
  name: string;
  status: number;
  created_at: Date;
  updated_at: Date;
  id_organization: number;
}
export interface IMetrics {
  coverage: number;
  bugs: number;
  vulnerabilities: number;
  hotspots: number;
  codeSmells: number;
  createTime: Date;
}
export interface IRepository {
  name: string;
  metrics: IMetrics;
  state: string;
}
export interface IOrganization {
  name: string;
  status: number;
}
export interface IDataRequest extends IOrganization {
  idTribe: number;
  organization: IOrganization;
  repository: IRepository[];
}
export interface IResponseHttpStatus {
  id: number;
  state: number;
  name: string;
}
