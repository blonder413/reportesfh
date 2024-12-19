import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { orderByIdReport } from 'src/reports';

@Injectable()
export class StoreReportsService {
  constructor(private readonly printerService: PrinterService) {}

  async getOrderByIdReport(orderId: number) {
    const docDefinition = orderByIdReport();
    return this.printerService.createPdf(docDefinition);
  }
}
