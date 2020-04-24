export class Card {
  // TODO anything needed here?
}

export class ActBreak extends Card {
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

export class Scene extends Card {
  private description: string;
  private isPlot: boolean;
  private status: Status;
  private title: string;

  constructor(
    description: string,
    isPlot: boolean,
    status: Status,
    title: string
  ) {
    super();
    this.description = description;
    this.isPlot = isPlot;
    this.status = status;
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getIsPlot(): boolean {
    return this.isPlot;
  }

  public getStatus(): Status {
    return this.status;
  }

  public getTitle(): string {
    return this.title;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setIsPlot(isPlot: boolean): void {
    this.isPlot = isPlot;
  }

  public setStatus(status: Status): void {
    this.status = status;
  }

  public setTitle(title: string): void {
    this.title = title;
  }
}

export class Project {
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

export class Status {
  private color: string;
  private name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }

  public getColor(): string {
    return this.color;
  }

  public getName(): string {
    return this.name;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public setName(name: string): void {
    this.name = name;
  }
}
