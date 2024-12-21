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

export const getBasicChartSvgReport =
  async (): Promise<TDocumentDefinitions> => {
    const chart = await generateChartImage();
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
      ],
    };
  };
