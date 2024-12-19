import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

interface HeaderOptions {
  subtitle?: string;
  showDate?: boolean;
  showLogo?: boolean;
  title?: string;
}

const logo: Content = {
  alignment: 'center',
  image: 'src/assets/logo.png',
  height: 100,
  marginBottom: 20,
  width: 130,
};

const currentDate: Content = {
  alignment: 'right',
  margin: [20, 30],
  text: DateFormatter.getHumanDate(),
  width: 200,
};

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subtitle, showDate = true, showLogo = true } = options;

  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate ? currentDate : '';
  const headerSubtitle: Content = subtitle
    ? {
        text: subtitle,
        alignment: 'center',
        margin: [0, 2, 0, 0],
        style: { fontSize: 16, bold: true },
      }
    : '';
  const headerTitle: Content = title
    ? {
        stack: [
          {
            alignment: 'center',
            margin: [0, 15, 0, 0],
            style: {
              bold: true,
              fontSize: 22,
            },
            text: title,
          },
          headerSubtitle,
        ],
        // text: title,
        // style: { bold: true },
      }
    : '';
  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
