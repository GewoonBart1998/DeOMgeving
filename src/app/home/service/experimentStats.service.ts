import {ApiService} from '../../shared/services/api.service';
import {stats} from '../components/dasboard/stats';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ExperimentStatsService {

  private resourcePath = '/experimentenStats';

  constructor(private api: ApiService) {
  }

  getStats(){
    return this.api.get<stats>(this.resourcePath);
  }
}
