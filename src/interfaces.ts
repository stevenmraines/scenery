interface CardType {
  backgroundColor: string;
  description: string;
  fontColor: string;
  isPlot: boolean;
  title: string;
}

interface ProjectType {
  cards: Array<CardType>;
  title: string;
}
