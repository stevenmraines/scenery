import { v4 as uuidv4 } from "uuid";

export default class Status {
  private color: string;
  readonly id: string;
  private name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.id = uuidv4();
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
