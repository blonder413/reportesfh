import { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptinos {
  name: string;
}

export const getHelloWorldReport = (
  options: ReportOptinos,
): TDocumentDefinitions => {
  const { name } = options;
  const docDefinition: TDocumentDefinitions = {
    content: [`Hola ${name}`],
  };
  return docDefinition;
};
