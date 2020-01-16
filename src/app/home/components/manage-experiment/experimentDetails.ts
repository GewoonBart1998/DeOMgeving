export class ExperimentDetails {
  experimentId: number;
  netwerk: string;
  status: string;
  kosten_inovatie: string;
  kosten_anders: string;
  doorlooptijd: string;
  beschrijving: string;
  voortgang: string;
  archief_type: string;

  constructor() {
    this.netwerk = "";
    this.status = "";
    this.kosten_inovatie = "";
    this.kosten_anders = "";
    this.doorlooptijd = "";
    this.beschrijving = "";
    this.voortgang = "";
    this.archief_type= null;
  }
}
