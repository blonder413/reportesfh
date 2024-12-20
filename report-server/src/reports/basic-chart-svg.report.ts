import { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs from 'fs';
import * as Utils from '../helpers/chart-utils';

const svgContent = fs.readFileSync('src/assets/logotipo.svg', 'utf8');

const generateChartImage = async () => {
  const chartConfig = {
    type: 'bar',
    data: {
      labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'],
      datasets: [
        {
          backgroundColor: 'rgba(93,75,192,0.2)',
          boderColor: 'rgb(81,75,192)',
          borderWidth: 1,
          data: [4, 13, 8, 10, 85, 86, 5],
          label: 'Mi primer gráfico',
        },
      ],
    },
  };
  return Utils.chartJsToImage(chartConfig);
};

const generateDonut = async () => {
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      title: { display: true, text: 'Chart.js Doughnut Chart' },
    },
  };
  return Utils.chartJsToImage(config);
};

export const getBasicChartSvgReport =
  async (): Promise<TDocumentDefinitions> => {
    const [chart, chartDonut] = await Promise.all([
      generateChartImage(),
      generateDonut(),
    ]);
    return {
      content: [
        {
          fit: [100, 100],
          svg: svgContent,
          width: 100,
        },
        {
          image: chart,
          width: 500,
        },
        {
          image: chartDonut,
          width: 500,
        },
      ],
    };
  };
