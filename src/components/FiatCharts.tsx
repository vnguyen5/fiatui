import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { getBeta } from '../data/api';

import { testBetaData } from "../data/data";

export const FiatChart = (props: {data, title: string, color?: string}) => {

  const {data, title, color} = props;
  return (
    <LineChart
      // width={1000}
      height={400}
      series={[
        { data: Object.keys(data).map(key => data[key]), label: title , area: true, showMark: false , color: color ?? '#02d5d1'},

      ]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
      xAxis={[{ scaleType: 'point', data: Object.keys(data) }]}
    />
  );
}

export const DoubleChart = (props: {data1, data2, title: string}) => {
  const {data1, data2, title} = props;
  return(
    <LineChart
      // width={800}
      height={400}
      series={[
        { data: Object.keys(data1).map(key => data1[key]), label: "Beta CDF" , area: true, showMark: false },
        { data: Object.keys(data2).map(key => data2[key]), label: 'Lognormal CDF', area: true, showMark: false, color: 'palevioletred'},
      ]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
      xAxis={[{ scaleType: 'point', data: Object.keys(data1) }]}
    />
  )
}