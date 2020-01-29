import {Experiment} from '../experiment-card/experiment';

export class ExperimentStats {
  totaal: number;
  aantalExperimenten: number;
  aantalIdee: number;
  aantalLabIn: number;
  aantalLabUit: number;
  aantalVasteDienst: number;
  aantalGroen: number;
  aantalOranje: number;
  aantalRood: number;
  aantalGewijzigdSinds: number;
  gewijzigdeExperimenten: Experiment[];
  gewijzigdeDiensten: Experiment[];
}
