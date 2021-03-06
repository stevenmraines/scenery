import Card from "./Card";
import Status from "./Status";

export default class Scene extends Card {
  private description: string;
  private isPlot: boolean;
  private status: Status | null;
  private title: string;

  constructor(
    description: string,
    isPlot: boolean,
    status: Status | null,
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

  public getStatus(): Status | null {
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

  public setStatus(status: Status | null): void {
    this.status = status;
  }

  public setTitle(title: string): void {
    this.title = title;
  }
}
