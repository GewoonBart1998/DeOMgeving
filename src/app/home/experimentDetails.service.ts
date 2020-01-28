import {Injectable} from '@angular/core';
import {Experiment} from './components/experiment-card/experiment';
import {ApiService} from '../shared/services/api.service';
import {ExperimentDetails} from './components/manage-experiment/experimentDetails';

@Injectable({
  providedIn: 'root'
})
export class ExperimentDetailsService {
  private resourcePath = '/experimentDetails';

  constructor(private api: ApiService) {
  }

  getByExperimentId(experimentId: number) {
    return this.api.get<ExperimentDetails>(`${this.resourcePath}/${experimentId}`);
  }

  create(experiment: ExperimentDetails) {
    return this.api.post(this.resourcePath, experiment);
  }

  update(experimentId: number, experiment: ExperimentDetails) {
    return this.api.put(`${this.resourcePath}/${experimentId}`, experiment);
  }

  deleteByExperimentId(experimentId: number) {
    return this.api.delete(`${this.resourcePath}/${experimentId}`);
  }

}
