import {Injectable} from '@angular/core';
import {Experiment} from '../components/experiment-card/experiment';
import {ApiService} from '../../shared/services/api.service';
import {ExperimentDetails} from '../components/manage-experiment/experimentDetails';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {


  constructor(private api: ApiService,
               private http: HttpClient) {
  }

  getTestlabLogo(doneFunc) {
    this.getBlob('assets/img/testlabOM_logo.png', function (data) {
      doneFunc({
        image: data ,
        width: 150,
        alignment : 'left'
      });
    });
  }


  getBlob(url, doneFunc) {
    console.log("REQUEST " + url);
    this.http.get(url, { responseType: 'blob' })
      .subscribe(res => {
        console.log("resp1 " + url);
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log("resp2 " + url);
          var base64data = reader.result;
          doneFunc(base64data);
        };

        reader.readAsDataURL(res);
      });
  }

    getDocumentDefinition(experiment: Experiment, experimentDetails: ExperimentDetails, doneFunc){
      this.getTestlabLogo(function(image) {
        console.log(image);
        doneFunc(
          {
            content: [
              [
                image
              ],
              {
                text: 'Experiment',
                style: 'header'
              },
              {
                text: 'Experiment naam:',
                style: 'koptext'

              },
              {
                text: experiment.experiment_naam,
                style: 'text'
              },
              {
                text: 'Primaire experiment leider:',
                style: 'koptext'

              },
              {
                text: experiment.experiment_leider_primair,
                style: 'text'
              },
              {
                text: 'Secondaire experiment leider:',
                style: 'koptext'

              },
              {
                text: experiment.experiment_leider_secundair,
                style: 'text'
              },
              {
                text: 'Fase:',
                style: 'koptext'

              },
              {
                text: experiment.fase,
                style: 'text'
              },
              {
                text: 'Status kleur:',
                style: 'koptext'

              },
              {
                text: experiment.color,
                style: 'text'
              },
              {
                text: 'Experiment details',
                style: 'header'
              },
              {
                text: 'Beschrijving:',
                style: 'koptext'

        },
        {
          text: experiment.beschrijving,
          style: 'text'
        },
        {
          text: 'Netwerk: :',
          style: 'koptext'

              },
              {
                text: experimentDetails.netwerk,
                style: 'text'
              },
              {
                text: 'Status:',
                style: 'koptext'

              },
              {
                text: experimentDetails.status,
                style: 'text'
              },
              {
                text: 'Kosten innovatie:',
                style: 'koptext'

        },
        {
          text: experimentDetails.kosten_innovatie,
          style: 'text'
        },
        {
          text: 'Kosten anders:',
          style: 'koptext'

              },
              {
                text: experimentDetails.kosten_anders,
                style: 'text'
              },
              {
                text: 'Doorlooptijd:',
                style: 'koptext'

              },
              {
                text: experimentDetails.doorlooptijd,
                style: 'text'
              },
              {
                text: 'Voortgang:',
                style: 'koptext'

              },
              {
                text: experimentDetails.overige_opmerkingen,
                style: 'text'
              },
              {
                text: 'Archief:',
                style: 'koptext'

              },
              {
                text: experimentDetails.archief_type,
                style: 'text'
              },
            ],
            styles: {
              header:{
                fontSize: 20,
                bold: true,
                margin: [0, 10, 0, 10]
              },
              koptext:{
                fontSize: 13,
                margin: [30, 0, 0, 2],
                bold: true

              },
              text:{
                fontSize: 11,
                margin: [30, 0, 0, 5]
              }
            }
          }
        );
      });

  }
}
