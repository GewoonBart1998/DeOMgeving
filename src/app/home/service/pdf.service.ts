import {Injectable} from '@angular/core';
import {Experiment} from '../components/experiment-card/experiment';
import {ApiService} from '../../shared/services/api.service';
import {ExperimentDetails} from '../components/manage-experiment/experimentDetails';
import {HttpClient} from '@angular/common/http';
import {ExperimentStats} from '../components/overzicht-exporteren/ExperimentStatsOverzicht';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private currentDate = new Date();

  constructor(private api: ApiService,
              private http: HttpClient) {
  }

  getTestlabLogo(doneFunc) {
    this.getBlob('assets/img/testlabOM_logo.png', function(data) {
      doneFunc({
        image: data,
        width: 150,
        alignment: 'left'
      });
    });
  }


  getBlob(url, doneFunc) {
    console.log('REQUEST ' + url);
    this.http.get(url, {responseType: 'blob'})
      .subscribe(res => {
        console.log('resp1 ' + url);
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log('resp2 ' + url);
          var base64data = reader.result;
          doneFunc(base64data);
        };

        reader.readAsDataURL(res);
      });
  }

  getDocumentDefinition(experiment: Experiment, experimentDetails: ExperimentDetails, doneFunc) {
    this.getTestlabLogo(function(image) {
      doneFunc({
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
            header: {
              fontSize: 20,
              bold: true,
              margin: [0, 10, 0, 10]
            },
            koptext: {
              fontSize: 13,
              margin: [30, 0, 0, 2],
              bold: true

            },
            text: {
              fontSize: 11,
              margin: [30, 0, 0, 5]
            }
          }
        }
      );
    });

  }

  getDateTitle(date, formattedDate) {
    return {
      text: 'Uitdraai van ' + date + ' tot ' + formattedDate,
      style: 'header'
    };
  }

  getDescription() {
    return {
      text: 'Alle huidig lopende Experimenten vallen onder te verdelen in de volgende fasen:',
      style: 'koptext'

    };
  }

  getExperimentPhaseStats(experimentStats) {
    return {
      text: 'Ideeën: ' + experimentStats.aantalIdee + ' het lab in: ' + experimentStats.aantalLabIn + ' het lab uit: ' + experimentStats.aantalLabUit,
      style: 'text'
    };
  }

  getTitle(tekst) {
    return {
      text: tekst,
      style: 'koptext'
    };
  }

  getEdditedExperiments(experiment: Experiment) {
    const beschrijving = experiment.beschrijving.trim().length == 0 ? "geen" : experiment.beschrijving.trim();
    return {
      text: `\n Naam: ${experiment.experiment_naam.trim()},\nBeschrijving: ${beschrijving},\nLaatst gewijzigd datum: ${experiment.wijziging_datum}`,
      style: 'text'
    };
  }

  getVastedienstenAantal(experimentStats) {
    return {
      text: 'huidig aantal vastediensten: ' + experimentStats.aantalVasteDienst,
      style: 'text'
    };
  }
  getExperimentOverzicht(date: string, currentDate: Date, experimentStats: ExperimentStats, doneFunc) {
    const format = 'yyyy-MM-dd';
    const locale = 'en-EU';
    const formattedDate = formatDate(currentDate, format, locale);
    const self = this;
    this.getTestlabLogo(function(image) {

      const content = [];
      content.push([image]);
      content.push(self.getDateTitle(date, formattedDate));
      content.push(self.getDescription());
      content.push(self.getExperimentPhaseStats(experimentStats));
      content.push(self.getTitle('\n Dit zijn alle vastendiensten'));
      content.push(self.getVastedienstenAantal(experimentStats));
      console.log(experimentStats);
      console.log(experimentStats.aantalVasteDienst);
      content.push(self.getTitle('\n Dit zijn alle gewijzigde experimenten'));

      experimentStats.gewijzigdeExperimenten.forEach(experiment => {
        content.push(self.getEdditedExperiments(experiment));
      });

      content.push(self.getTitle('\n Dit zijn alle gewijzigde vaste diensten'));
      experimentStats.gewijzigdeDiensten.forEach(experiment => {
        content.push(self.getEdditedExperiments(experiment));
      });

      doneFunc({
        content: content,
        styles: {
          header: {
            fontSize: 20,
            bold: true,
            margin: [0, 10, 0, 10]
          },
          koptext: {
            fontSize: 13,
            margin: [30, 0, 0, 2],
            bold: true

          },
          text: {
            fontSize: 11,
            margin: [30, 0, 0, 5]
          }
        }
      });
    });

    }


  }
