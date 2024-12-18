import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';

export const getCountryReport = (): TDocumentDefinitions => {
  return {
    content: [
      {
        /**
         * headerLineOnly
         * lightHorizontalLines
         * noBorders
         */
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],
          body: [
            ['First', 'Second', 'Third', 'The Last one'],
            ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
          ],
        },
      },
    ],
    header: headerSection({
      title: 'Country Report',
      subtitle: 'List of countries',
    }),
    pageMargins: [40, 110, 40, 60],
    pageOrientation: 'landscape',
  };
};
