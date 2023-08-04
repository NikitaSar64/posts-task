export interface IPost {
  autor: string;
  date: string;
  img: string;
  img_2x: string;
  tags: string;
  text: string;
  title: string;
  views: string;
}

export interface ISearchContext {
  value: string;
  setValue: (newValue: string) => void;
}
