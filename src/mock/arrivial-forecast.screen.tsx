import {IArrivialForecast} from '../interfaces/arrival-forecast.model';

export const arrivialForecastMock: IArrivialForecast[] = [
  {
    hr: '20:09',
    p: {
      cp: 4200953,
      np: 'PARADA ROBERTO SELMI DEI B/C',
      py: -23.675901,
      px: -46.752812,
      l: [
        {
          c: '7021-10',
          cl: 1989,
          sl: 1,
          lt0: 'TERM. JOÃO DIAS',
          lt1: 'JD. MARACÁ',
          qv: 1,
          vs: [
            {
              p: '74558',
              t: '23:11',
              a: true,
              ta: new Date('2017-05-07T23:09:05Z'),
              py: -23.67603,
              px: -46.75891166666667,
            },
          ],
        },
      ],
    },
  },
];
