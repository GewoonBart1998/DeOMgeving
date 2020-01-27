export class ExperimentDetails {
  experimentId: number;
  netwerk: string;
  status: string;
  kosten_innovatie: string;
  kosten_anders: string;
  doorlooptijd: string;
  beschrijving: string;
  overige_opmerkingen: string;
  archief_type: string;

  constructor() {
    this.netwerk = "";
    this.status = "";
    this.kosten_innovatie = "";
    this.kosten_anders = "";
    this.doorlooptijd = "";
    this.beschrijving = "";
    this.overige_opmerkingen = "";
    this.archief_type= null;
  }
}
