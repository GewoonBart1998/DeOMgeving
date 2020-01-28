import {Injectable} from '@angular/core';
import {Experiment} from '../components/experiment-card/experiment';
import {ApiService} from '../../shared/services/api.service';
import {stats} from '../components/dasboard/stats';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService {
  private resourcePath = '/experimenten';

  constructor(private api: ApiService) {
  }

  list() {
    return this.api.get<Array<Experiment>>(this.resourcePath);
  }

  Stats(){
    return this.api.get<stats>(this.resourcePath);
  }

  //TODO clean method names
  getById(experimentId: number) {
    return this.api.get<Experiment>(`${this.resourcePath}/${experimentId}`);
  }

  create(experiment: Experiment) {
    return this.api.post(this.resourcePath, experiment);
  }

  update(experimentId: number, experiment: Experiment) {
    return this.api.put(`${this.resourcePath}/${experimentId}`, experiment);
  }

  delete(experimentId: number) {
    return this.api.delete(`${this.resourcePath}/${experimentId}`);
  }


  filterBy(value: string){
    return this.api.get<Array<Experiment>>(this.resourcePath + "/filter/" + value)

  }

  searchBy(searchBy: string){
    return this.api.get<Array<Experiment>>(this.resourcePath + "/search/" + searchBy)
  }


}
