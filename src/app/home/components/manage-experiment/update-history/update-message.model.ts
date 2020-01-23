export class UpdateMessage {
  public postedDate: Date

  constructor(  public author: string,
                public content: string) {}
}
