export interface IFeatures  {
    icon: React.ReactNode,
    heading: string,
    paragraph: string
}

export interface IPrice {
  name: string;
  price: string;
  features: string[];
  isMostPopular: boolean;
  description: string;
}