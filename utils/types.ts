export interface navItem {
  name: String;
  url: String;
}
export interface IReviewProps {
  text: string;
  authorName: string;
  authorImg: string;
}
export interface IProcessStep {
  stepTitle: string;
  stepText: string;
  // i: number;
}
export interface ICollectionProps {
  title: string;
  date: string;
  imgUrl: string;
  imgAlt: string;
}

export interface IPackageCardProps {
  varient: 'standard' | 'focus';
  price: number;
  title: string;
  description: string;
  list: string[];
}

export interface IPricingSectionProps {
  title: String;
  text: string;
  cards: IPackageCardProps[];
}
