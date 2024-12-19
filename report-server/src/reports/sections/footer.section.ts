import { Content, ContextPageSize } from 'pdfmake/interfaces';

export const footerSection = (
  currentPage: number,
  pageCount: number,
  pageSize: ContextPageSize,
): Content => {
  return {
    alignment: 'right',
    fontSize: 10,
    margin: [0, 10, 35, 0],
    text: 'Página ' + currentPage + ' de ' + pageCount,
  };
};
