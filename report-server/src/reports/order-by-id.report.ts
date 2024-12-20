import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { CurrencyFormatter, DateFormatter } from 'src/helpers';
import { footerSection } from './sections/footer.section';

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
  subheader: {
    fontSize: 16,
    bold: true,
    margin: [0, 20, 0, 0],
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
          { text: 'Raccoon City\nUSA\nblonder413.wordpress.com' },
          {
            alignment: 'right',
            text: [
              { text: `Recibo No. 413\n`, bold: true },
              `Fecha del recibo: ${DateFormatter.getHumanDate()}\nPagar antes de: ${DateFormatter.getHumanDate()}\n`,
            ],
          },
        ],
      },
      // qr
      { alignment: 'right', qr: 'https://blonder413.wordpress.com', fit: 75 },
      // dirección del cliente
      {
        text: [
          { text: 'Cobrar a:', style: 'subHeader' },
          `\nRazón social: BSAA org,
          USA`,
        ],
      },
      // tabla del detalle de la orden
      {
        layout: 'headerLineOnly',
        margin: [0, 20],
        table: {
          headerRows: 1,
          widths: [50, '*', 'auto', 'auto', 'auto'],
          body: [
            ['Id', 'Descripción', 'Cantidad', 'Precio', 'Total'],
            [
              'Id',
              'Descripción',
              'Cantidad',
              'Precio',
              {
                alignment: 'right',
                text: CurrencyFormatter.formatCurrency(413),
              },
            ],
          ],
        },
      },
      // salto de línea
      '\n\n',
      // Totales
      {
        columns: [
          { width: '*', text: '' },
          {
            width: 'auto',
            layout: 'noBorders',
            table: {
              body: [
                [
                  'Subtotal',
                  {
                    alignment: 'right',
                    text: CurrencyFormatter.formatCurrency(1200),
                  },
                ],
                [
                  { text: 'Total', bold: true },
                  {
                    bold: true,
                    alignment: 'right',
                    text: CurrencyFormatter.formatCurrency(1000),
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
    footer: footerSection,
    header: logo,
    pageMargins: [40, 60, 40, 60],
    styles: styles,
  };
};
