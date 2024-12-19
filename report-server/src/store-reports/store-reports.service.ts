import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';

@Injectable()
export class StoreReportsService {
  constructor(private readonly printerService: PrinterService) {}

  async getOrderByIdReport(orderId: number) {
    const docDefinition = getHelloWorldReport({ name: 'jill' });
    return this.printerService.createPdf(docDefinition);
  }
}
