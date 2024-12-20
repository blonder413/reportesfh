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
      // Headers
      { style: 'header', text: 'BSAA' },
      // dirección
      {
        columns: [
          { text: 'Raccoon City\nUSA' },
          {
            alignment: 'right',
            text: `Recibo No. 413\nFecha del recibo: ${DateFormatter.getHumanDate()}\nPagar antes de: ${DateFormatter.getHumanDate()}\n`,
          },
        ],
      },
      // qr
      { alignment: 'right', qr: 'https://blonder413.wordpress.com', fit: 75 },
    ],
    header: logo,
    pageMargins: [40, 60, 40, 60],
    styles: styles,
  };
};
