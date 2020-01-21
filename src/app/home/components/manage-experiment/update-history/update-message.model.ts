export class UpdateMessage {

  constructor(  public messageId: number,
                public author: string,
                public experimenttId: number,
                public content: string,
                public postedDate: Date) {}
}
