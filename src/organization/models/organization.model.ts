export class OrganizationModel {
  idOrganization?: number;
  name: string;
  status: number;
}

export class ResponseMetricsModel {
  id: number;
  name: string;
  tribe: string;
  organization: string;
  coverage: string;
  codeSmells: number;
  bugs: number;
  vulnerabilities: number;
  hotspots: number;
  verificationState: string;
  state: string;
}
