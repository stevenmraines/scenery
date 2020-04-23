export class Card {
  // TODO anything needed here?
}

export class ActBreak extends Card {
  private act: number;

  constructor(act: number) {
    super();
    this.act = act;
  }

  // TODO figure out how to use static initialization so I can get default values for props
  protected static SInit = (() => {
    ActBreak.prototype.act = 1;
  })();

  public getAct(): number {
    return this.act;
  }

  public setAct(act: number): void {
    this.act = act;
  }
}

export class Scene extends Card {
  private backgroundColor: string;
  private description: string;
  private fontColor: string;
  private isPlot: boolean;
  private title: string;

  constructor(
    backgroundColor: string,
    description: string,
    fontColor: string,
    isPlot: boolean,
    title: string
  ) {
    super();
    this.backgroundColor = backgroundColor;
    this.description = description;
    this.fontColor = fontColor;
    this.isPlot = isPlot;
    this.title = title;
  }

  protected static SInit = (() => {
    Scene.prototype.backgroundColor = "#ffffff";
    Scene.prototype.description = "Add a longer description here";
    Scene.prototype.fontColor = "#000000";
    Scene.prototype.isPlot = true;
    Scene.prototype.title = "Add a title here";
  })();

  public getBackgroundColor(): string {
    return this.backgroundColor;
  }

  public getDescription(): string {
    return this.description;
  }

  public getFontColor(): string {
    return this.fontColor;
  }

  public getIsPlot(): boolean {
    return this.isPlot;
  }

  public getTitle(): string {
    return this.title;
  }

  public setBackgroundColor(backgroundColor: string): void {
    this.backgroundColor = backgroundColor;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setFontColor(fontColor: string): void {
    this.fontColor = fontColor;
  }

  public setIsPlot(isPlot: boolean): void {
    this.isPlot = isPlot;
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

  protected static SInit = (() => {
    Project.prototype.cards = [{} as Scene] as Card[];
    Project.prototype.title = "New Project";
  })();

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
