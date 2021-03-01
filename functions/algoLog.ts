export class AlgoLog {
  private readonly init: string;
  private content: Array<string> = [];

  public info(s: string) {
    this.content.push(s);
  }

  public clear() {
    this.content = [this.init];
  }

  public output(): string {
    return this.content.join("\n");
  }

  constructor(init: string) {
    this.init = init;
    this.info(init);
  }
}
