export interface IArrivalForecast {
  hr: string;
  p: {
    cp: number;
    np: string;
    py: number;
    px: number;
    l: [
      {
        c: string;
        cl: number;
        sl: number;
        lt0: string;
        lt1: string;
        qv: number;
        vs: [
          {
            p: string;
            t: string;
            a: boolean;
            ta: Date;
            py: number;
            px: number;
          },
        ];
      },
    ];
  };
}
