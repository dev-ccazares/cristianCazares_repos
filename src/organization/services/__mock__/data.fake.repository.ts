export const responseFakeData = [
  {
    idTribe: 1,
    name: 'Mytribe',
    status: 640,
    organization: {
      name: 'Hello',
      status: 640,
    },
    repository: [
      {
        name: 'Prueba2',
        state: 'E',
        metrics: {
          coverage: 80,
          bugs: 10,
          vulnerabilities: 324,
          hotspots: 324,
          codeSmells: 234,
          createTime: new Date(),
        },
      },
      {
        name: 'Prueba3',
        state: 'E',
        metrics: {
          coverage: 74,
          bugs: 10,
          vulnerabilities: 324,
          hotspots: 324,
          codeSmells: 234,
          createTime: new Date(),
        },
      },
      {
        name: 'Prueba5',
        state: 'E',
        metrics: {
          coverage: 75,
          bugs: 10,
          vulnerabilities: 324,
          hotspots: 324,
          codeSmells: 234,
          createTime: new Date(),
        },
      },
    ],
  },
];

export const tribeMockInfo = {
  idTribe: 1,
  name: 'Mytribe',
  status: 640,
  created_at: '2022-07-05T13:11:10.003Z',
  updated_at: '2022-07-05T13:11:10.003Z',
};

export const resultMetrics = [
  {
    id: 1,
    name: 'Prueba2',
    tribe: 'Mytribe',
    organization: 'Hello',
    coverage: 80,
    codeSmells: 234,
    bugs: 10,
    vulnerabilities: 324,
    state: 'Enabled',
  },
  {
    id: 1,
    name: 'Prueba3',
    tribe: 'Mytribe',
    organization: 'Hello',
    coverage: 74,
    codeSmells: 234,
    bugs: 10,
    vulnerabilities: 324,
    state: 'Enabled',
  },
  {
    id: 1,
    name: 'Prueba5',
    tribe: 'Mytribe',
    organization: 'Hello',
    coverage: 75,
    codeSmells: 234,
    bugs: 10,
    vulnerabilities: 324,
    state: 'Enabled',
  },
];

export const httpMock = {
  repositories: [
    { id: 1, state: 604, name: ' Verificado' },
    { id: 2, state: 605, name: 'En espera' },
    { id: 3, state: 606, name: 'Aprobado' },
  ],
};
