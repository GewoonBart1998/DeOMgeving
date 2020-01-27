import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Experiment} from '../../home/components/experiment-card/experiment';
import {UploadedFile} from './UploadedFile';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private resourcePath = '/upload';
  private reader: FileReader;
  private fileUploadedCallback: Function;

  constructor(private api: ApiService,
              private snackbar: MatSnackBar) {
    this.reader = new FileReader();
  }

  handleFileUpload(experimentId: number, fileToUpload: File, callback) {
    this.fileUploadedCallback = callback;
    const self = this;
    this.reader.onloadend = function() {
      self.onFileLoaded(experimentId, fileToUpload);
    };
    this.reader.readAsDataURL(fileToUpload);
  }

  uploadAttachment(experimentId: number, fileData: File, base64Data: string){
    this.api.post(this.resourcePath + '/attachment/' + experimentId + '/' + fileData.name, base64Data).subscribe( res => {

      if(this.fileUploadedCallback) {
        this.fileUploadedCallback();
      }
      this.snackbar.open('Bijlage toegevoegd', '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    })
  }
  private onFileLoaded(experimentId, fileToUpload: File) {
    let base64: string = (this.reader.result as string).split(',')[1];
    this.uploadAttachment(experimentId, fileToUpload, base64);
  }


  getUploadedFile(experimentId: number) {
    return this.api.get<UploadedFile>(this.resourcePath + '/attachment/' + experimentId);
  }
}
