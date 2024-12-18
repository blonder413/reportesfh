import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getCountryReport, getEmploymentLetterReport, getEmploymentLetterReportById, getHelloWorldReport } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  constructor(private readonly printerService: PrinterService) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    // console.log('conectado a la base de datos');
  }
  hello() {
    const docDefinition = getHelloWorldReport({ name: 'jill valentine' });
    return this.printerService.createPdf(docDefinition);
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetterReport();
    return this.printerService.createPdf(docDefinition);
  }

  async employmentLetterById(employeeId: number) {
    const employee = await this.employees.findUnique({
      where: { id: employeeId },
    });
    if (!employee) {
      throw new NotFoundException(`Empleado con ${employeeId} no encontrado`);
    }
    const docDefinition = getEmploymentLetterReportById({
      employerName: 'Jill Valentine',
      employerPosition: 'Agente especial',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: 'BSAA',
    });
    return this.printerService.createPdf(docDefinition);
  }

  async getCountries(){
    const docDefinition = getCountryReport()
    return this.printerService.createPdf(docDefinition);
  }
}
