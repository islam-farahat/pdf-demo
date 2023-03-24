import { Injectable } from '@nestjs/common';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable()
export class AppService {
  async getPdf(name: string): Promise<string> {
    const doc = new jsPDF({
      unit: 'mm',
      format: [500, 210],
    });
    doc.setDrawColor(0);
    doc.setFillColor('#FFD966');
    doc.rect(0, 0, 210, 50, 'F');
    doc.setFontSize(40);
    doc.setFont('Courier', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('FIXINS', 105, 25, { align: 'center' });
    doc.setFontSize(16);
    doc.text(name, 105, 35, { align: 'center' });
    doc.setFillColor('#000000');
    doc.rect(0, 70, 158, 25, 'F');
    doc.setFontSize(25);
    doc.text('LIQUID FIXINS', 79, 83, {
      align: 'center',
      baseline: 'middle',
    });
    doc.setFont('helvetica');
    autoTable(doc, {
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
    autoTable(doc, {
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
    autoTable(doc, {
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
    autoTable(doc, {
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
    autoTable(doc, {
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
    autoTable(doc, {
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

    doc.setFillColor('#000000');
    doc.setFont('Courier', 'bold');
    doc.rect(0, 350, 128, 25, 'F');
    doc.setFont('helvetica');
    doc.setFontSize(30);
    doc.text('DRAFT BEER', 64, 363, {
      align: 'center',
      baseline: 'middle',
    });
    doc.setFontSize(20);
    doc.setTextColor(0);
    doc.text('Black Owned Breweries', 5, 385, {
      align: 'left',
      baseline: 'middle',
    });
    doc.setFontSize(14);
    doc.text(
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

    return doc.output();
  }
}
