import Card from "./Card";

export default class Project {
  private cards: Array<Card>;
  private title: string;

  constructor(cards: Array<Card>, title: string) {
    this.cards = cards;
    this.title = title;
  }

  public getCards(): Card[] {
    return this.cards;
  }

  public getTitle(): string {
    return this.title;
  }

  public setCards(cards: Card[]): void {
    this.cards = cards;
  }

  public setTitle(title: string): void {
    this.title = title;
  }
}
