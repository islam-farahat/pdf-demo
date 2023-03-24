import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('pdf')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getPdf(@Res() res: Response, @Body() data): Promise<void> {
    const pdfLink = await this.appService.getPdf(data.name);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=menu.pdf');
    res.send(pdfLink);
  }
}
