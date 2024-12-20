import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { CurrencyFormatter, DateFormatter } from 'src/helpers';
import { footerSection } from './sections/footer.section';
import { text } from 'stream/consumers';

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

export interface Customers {
  customer_id: number;
  customer_name: string;
  contact_name: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface Products {
  product_id: number;
  product_name: string;
  category_id: number;
  unit: string;
  price: string;
}

export interface OrderDetail {
  order_detail_id: number;
  order_id: number;
  quantity: number;
  products: Products;
}

export interface CompleteOrder {
  order_id: number;
  customer_id: number;
  order_date: Date;
  customers: Customers;
  order_details: OrderDetail[];
}

interface ReportValues {
  title?: string;
  subtitle?: string;
  data: CompleteOrder;
}

export const orderByIdReport = (value: ReportValues): TDocumentDefinitions => {
  const { data } = value;
  const { customers, order_details } = data;
  const subtotal = order_details.reduce(
    (ac, detail) => ac + detail.quantity * +detail.products.price,
    0,
  );
  const total = subtotal * 1.19;
  /* console.log(data); */

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
              { text: `Recibo No. ${data.order_id}\n`, bold: true },
              `Fecha del recibo: ${DateFormatter.getHumanDate(data.order_date)}\nPagar antes de: ${DateFormatter.getHumanDate()}\n`,
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
          `\nRazón social: ${customers.customer_name},
          Contacto: ${customers.contact_name}`,
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
            ...order_details.map((detail) => [
              detail.order_detail_id.toString(),
              detail.products.product_name,
              detail.quantity.toString(),
              {
                alignment: 'right',
                text: CurrencyFormatter.formatCurrency(+detail.products.price),
              },
              {
                alignment: 'right',
                text: CurrencyFormatter.formatCurrency(
                  +detail.products.price * detail.quantity,
                ),
              },
            ]),
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
                    text: CurrencyFormatter.formatCurrency(subtotal),
                  },
                ],
                [
                  { text: 'Total', bold: true },
                  {
                    bold: true,
                    alignment: 'right',
                    text: CurrencyFormatter.formatCurrency(total),
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
