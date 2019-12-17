import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Experiment} from '../experiment-card/experiment';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService {
  private reourcePath = '/experimenten';

  constructor(private api: ApiService) {
  }

  list() {
    return this.api.get<Array<Experiment>>(this.reourcePath);
  }

  getById(experimentId: number) {
    return this.api.get<Experiment>(`${this.reourcePath}${experimentId}`);
  }

  create(experiment: Experiment) {
    return this.api.post(this.reourcePath, experiment);
  }

  update(experimentId: number, experiment: Experiment) {
    return this.api.put(`${this.reourcePath}/${experimentId}`, experiment);
  }

  delete(experimentId: number) {
    return this.api.delete(`${this.reourcePath}/${experimentId}`);
  }

}
