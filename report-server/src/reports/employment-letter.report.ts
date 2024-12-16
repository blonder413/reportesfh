import { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';

const style: StyleDictionary = {
  body: {
    alignment: 'justify',
    margin: [0, 0, 0, 50],
  },
  footer: {
    alignment: 'center',
    fontSize: 10,
    italics: true,
    margin: [0, 0, 0, 20],
  },
  header: {
    alignment: 'center',
    bold: true,
    fontSize: 22,
    margin: [0, 50, 0, 20],
  },
  signature: {
    bold: true,
    fontSize: 14,
  },
};

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        style: 'header',
      },
      {
        text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa], por medio de la presente certifico que [Nombre del Empleado] ha sido empleado en nuestra empresa desde el [Fecha de Inicio del Empleado].
        \n\nDurante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del
        Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.\n\n
        La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y procedimientos establecidos por la empresa.
        \n\nEsta constancia se expide a solicitud del interesado para los fines que considere conveniente.`,
        style: 'body',
      },
      {
        style: 'signature',
        text: `Atentamente,
        [Nombre del Empleador]
        [Cargo del Empleador]
        [Nombre de la Empresa]
        [Fecha de Emisión]`,
      },
    ],
    footer: {
      style: 'footer',
      text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
    },
    header: headerSection({
      // title: 'CONSTANCIA DE EMPLEO',
      showDate: true,
      showLogo: true,
    }),
    pageMargins: [40, 60, 40, 60],
    styles: style,
  };

  return docDefinition;
};
