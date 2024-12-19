import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/logo.png',
  height: 30,
  margin: [40, 20],
  width: 40,
};

const styles: StyleDictionary = {
  header: {
    bold: true,
    fontSize: 20,
    margin: [0, 30, 0, 0],
  },
};

export const orderByIdReport = (): TDocumentDefinitions => {
  return {
    content: [
      { style: 'header', text: 'BSAA' },
      {
        columns: [
          { text: 'Raccoon City\nUSA' },
          {
            alignment: 'right',
            text: `Recibo No. 413\nFecha del recibo: ${DateFormatter.getHumanDate()}\nPagar antes de: ${DateFormatter.getHumanDate()}\n`,
          },
        ],
      },
    ],
    header: logo,
    pageMargins: [40, 60, 40, 60],
    styles: styles,
  };
};
