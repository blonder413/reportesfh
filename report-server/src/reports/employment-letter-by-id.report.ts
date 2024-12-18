import { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';
import { DateFormatter } from 'src/helpers';

interface ReportValues {
  employerName: string;
  employerPosition: string;
  employeeName: string;
  employeePosition: string;
  employeeStartDate: Date;
  employeeHours: number;
  employeeWorkSchedule: string;
  employerCompany: string;
}

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

export const getEmploymentLetterReportById = (
  values: ReportValues,
): TDocumentDefinitions => {
  const {
    employerName,
    employerPosition,
    employeeName,
    employeePosition,
    employeeStartDate,
    employeeHours,
    employeeWorkSchedule,
    employerCompany,
  } = values;

  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        style: 'header',
      },
      {
        text: `Yo, ${employerName}, en mi calidad de ${employerPosition} de ${employerCompany}, por medio de la presente certifico que ${employeeName} ha sido empleado en nuestra empresa desde el ${DateFormatter.getHumanDate(employeeStartDate)}.
        \n\nDurante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.\n\n
        La jornada laboral del Sr./ Sra. ${employeeName} es de ${employeeHours} horas semanales, con un horario de ${employeeWorkSchedule}, cumpliendo con las políticas y procedimientos establecidos por la empresa.
        \n\nEsta constancia se expide a solicitud del interesado para los fines que considere conveniente.`,
        style: 'body',
      },
      {
        style: 'signature',
        text: `Atentamente,
        ${employerName}
        ${employerPosition}
        ${employerCompany}
        ${DateFormatter.getHumanDate(new Date())}`,
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
