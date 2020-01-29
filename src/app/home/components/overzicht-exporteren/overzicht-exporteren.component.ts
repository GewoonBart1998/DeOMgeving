import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {PdfService} from '../../service/pdf.service';
import {FileUploadService} from '../../../shared/services/file-upload.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import pdfMake from 'pdfmake/build/pdfmake';
import {SnackbarService} from '../../../shared/services/snackbar.service';
import {ConfirmActionComponent} from '../../../shared/components/confirm-action.component';
import {MatDialog} from '@angular/material/dialog';
import pdfFonts from "pdfmake/build/vfs_fonts";
import {ExperimentStatsService} from '../../service/experimentStats.service';
import {ExperimentDetails} from '../manage-experiment/experimentDetails';
import {ExperimentStats} from './ExperimentStatsOverzicht';
import {ApiService} from '../../../shared/services/api.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-overzicht-exporteren',
  templateUrl: './overzicht-exporteren.component.html',
  styleUrls: ['./overzicht-exporteren.component.css']
})
export class OverzichtExporterenComponent implements OnInit {
  private experimentStats: ExperimentStats;
  private currentDate = new Date();
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(  private pdfService: PdfService,
                private api: ApiService,
) {

  }

  ngOnInit() {
  }

  getExport() {
    const format = 'yyyy-MM-dd';
    const locale = 'en-EU';
    const formattedDate = formatDate(this.date.value, format, locale);

    console.log(formattedDate);

    this.api.get<ExperimentStats>('/experimentenStats/' + formattedDate).subscribe( res => {
      this.experimentStats = res;
      console.log("test");
      const documentDefinition = this.pdfService.getExperimentOverzicht(formattedDate, this.currentDate, this.experimentStats,
        function(data) {
          pdfMake.vfs = pdfFonts.pdfMake.vfs;
          var pdf = pdfMake.createPdf(data);
          pdf.download("Experiment Overzicht");
        });
    });
  }
}
