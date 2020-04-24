import Card from "./Card";

export default class ActBreak extends Card {
  private act: number;

  constructor(act: number) {
    super();
    this.act = act;
  }

  public getAct(): number {
    return this.act;
  }

  public setAct(act: number): void {
    this.act = act;
  }
}
