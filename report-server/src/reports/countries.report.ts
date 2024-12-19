import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';
import { title } from 'process';
import { countries as Country } from '@prisma/client';
import { footerSection } from './sections/footer.section';

interface ReportOptions {
  countries: Country[];
  subtitle?: string;
  title?: string;
}

export const getCountryReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { subtitle, title, countries } = options;
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
          widths: [50, 50, 50, '*', 'auto', '*'],
          body: [
            ['Id', 'ISO2', 'ISO3', 'name', 'continent', 'local name'],
            // [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
            ...countries.map((country) => [
              country.id.toString(),
              country.iso2,
              country.iso3,
              { text: country.name, bold: true },
              country.continent,
              country.local_name,
            ]),
            // ['','','','','Total', countries.length]
          ],
        },
      },
      {
        text: 'Totales',
        style: {
          fontSize: 16,
          bold: true,
          margin: [0, 40, 0, 0],
        },
      },
      {
        layout: 'noBorders',
        table: {
          headerRows: 1,
          body: [
            [
              { text: 'Toal de paises', bold: true, colSpan:2 },
              {},
              { text: countries.length.toString(), bold: true, colSpan:3 },
            ],
          ],
          widths: [50, 50, 50, '*', 'auto', '*'],
        },
      },
    ],
    footer: footerSection,
    header: headerSection({
      title: title ?? 'Country Report',
      subtitle: subtitle ?? 'List of countries',
    }),
    pageMargins: [40, 110, 40, 60],
    pageOrientation: 'landscape',
  };
};
