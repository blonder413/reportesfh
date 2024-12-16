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

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subtitle, showDate = true, showLogo = true } = options;

  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate
    ? {
        alignment: 'right',
        margin: [0, 20, 20, 0],
        text: DateFormatter.getHumanDate(),
      }
    : '';
  const headerTitle: Content = title
    ? { text: title, style: { bold: true } }
    : '';
  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
