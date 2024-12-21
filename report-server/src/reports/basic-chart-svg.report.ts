import { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs from 'fs';

const svgContent = fs.readFileSync('src/assets/logotipo.svg', 'utf8');

export const getBasicChartSvgReport =
  async (): Promise<TDocumentDefinitions> => {
    return {
      content: [
        {
          fit:[100,100],
          svg: svgContent,
          width: 100,
        },
      ],
    };
  };
