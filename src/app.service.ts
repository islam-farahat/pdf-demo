import { Injectable } from '@nestjs/common';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable()
export class AppService {
  doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',

    format: [500, 210],
  });

  async getPdf(name: string): Promise<string> {
    this.doc.setDrawColor(0);
    this.doc.setFillColor('#FFD966');
    this.doc.rect(0, 0, 210, 50, 'F');
    this.doc.setFontSize(40);
    this.doc.setFont('Courier', 'bold');
    this.doc.setTextColor(255, 255, 255);
    this.doc.text('FIXINS', 105, 25, { align: 'center' });
    this.doc.setFontSize(16);
    this.doc.text(name, 105, 35, { align: 'center' });
    this.doc.setFillColor('#000000');
    this.doc.rect(0, 70, 158, 25, 'F');
    this.doc.setFontSize(25);
    this.doc.text('LIQUID FIXINS', 79, 83, {
      align: 'center',
      baseline: 'middle',
    });
    this.doc.setFont('helvetica');
    autoTable(this.doc, {
      margin: { top: 100 },
      theme: 'plain',
      styles: {
        fontSize: 20,
        cellPadding: 0.5,
        halign: 'left',
        valign: 'middle',
      },
      head: [['Adult Kool Aid', 'Hurricane']],
      body: [
        [
          'Ciroc, Sprite, and Red Kool-Aid $14 SUBSTITUTE HENNESSY +$2',
          'Bumbu Rum, passion fruit puree, orange juice, grenadine, lime juice',
        ],
      ],
    });
    autoTable(this.doc, {
      margin: { top: 100 },
      theme: 'plain',
      styles: {
        fontSize: 20,
        cellPadding: 0.5,
        halign: 'left',
        valign: 'middle',
      },
      head: [['Adult Kool Aid', 'Hurricane']],
      body: [
        [
          'Ciroc, Sprite, and Red Kool-Aid $14 SUBSTITUTE HENNESSY +$2',
          'Bumbu Rum, passion fruit puree, orange juice, grenadine, lime juice',
        ],
      ],
    });
    autoTable(this.doc, {
      margin: { top: 100 },
      theme: 'plain',
      styles: {
        fontSize: 20,
        cellPadding: 0.5,
        halign: 'left',
        valign: 'middle',
      },
      head: [['Adult Kool Aid', 'Hurricane']],
      body: [
        [
          'Ciroc, Sprite, and Red Kool-Aid $14 SUBSTITUTE HENNESSY +$2',
          'Bumbu Rum, passion fruit puree, orange juice, grenadine, lime juice',
        ],
      ],
    });
    autoTable(this.doc, {
      margin: { top: 100 },
      theme: 'plain',
      styles: {
        fontSize: 20,
        cellPadding: 0.5,
        halign: 'left',
        valign: 'middle',
      },
      head: [['Adult Kool Aid', 'Hurricane']],
      body: [
        [
          'Ciroc, Sprite, and Red Kool-Aid $14 SUBSTITUTE HENNESSY +$2',
          'Bumbu Rum, passion fruit puree, orange juice, grenadine, lime juice',
        ],
      ],
    });
    autoTable(this.doc, {
      margin: { top: 100 },
      theme: 'plain',
      styles: {
        fontSize: 20,
        cellPadding: 0.5,
        halign: 'left',
        valign: 'middle',
      },
      head: [['Adult Kool Aid', 'Hurricane']],
      body: [
        [
          'Ciroc, Sprite, and Red Kool-Aid $14 SUBSTITUTE HENNESSY +$2',
          'Bumbu Rum, passion fruit puree, orange juice, grenadine, lime juice',
        ],
      ],
    });
    autoTable(this.doc, {
      margin: { top: 100 },
      theme: 'plain',
      styles: {
        fontSize: 20,
        cellPadding: 0.5,
        halign: 'left',
        valign: 'middle',
      },
      head: [['Adult Kool Aid', 'Hurricane']],
      body: [
        [
          'Ciroc, Sprite, and Red Kool-Aid $14 SUBSTITUTE HENNESSY +$2',
          'Bumbu Rum, passion fruit puree, orange juice, grenadine, lime juice',
        ],
      ],
    });

    this.doc.setFillColor('#000000');
    this.doc.setFont('Courier', 'bold');
    this.doc.rect(0, 350, 128, 25, 'F');
    this.doc.setFont('helvetica');
    this.doc.setFontSize(30);
    this.doc.text('DRAFT BEER', 64, 363, {
      align: 'center',
      baseline: 'middle',
    });
    this.doc.setFontSize(20);
    this.doc.setTextColor(0);
    this.doc.text('Black Owned Breweries', 5, 385, {
      align: 'left',
      baseline: 'middle',
    });
    this.doc.setFontSize(14);
    this.doc.text(
      `Oak Park Brewing Co.; Is a black owned brewery from the neighborhood of Oak
    Park in Sacramento, CA. OPB aims to bring the community together, to not only
    drink craft, but also make a difference. 
    `,
      5,
      393,
      {
        align: 'left',
        baseline: 'middle',
      },
    );

    return this.doc.output();
  }
}
