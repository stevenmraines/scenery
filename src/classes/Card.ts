import { v4 as uuidv4 } from "uuid";

export default class Card {
  readonly id: string;

  constructor() {
    this.id = uuidv4();
  }
}
