export type CatImage = {
  id: string;
  url: string;
}

export type CatBreed = {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  wikipedia_url: string;
  images: CatImage[];
}

export interface CatsContextInterface {
  data: CatBreed[];
  isLoading: boolean;
}