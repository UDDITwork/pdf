export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  testimonial: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
  image: string;
  color: string;
}

export interface GridSquare {
  id: string;
  color: string;
  isActive: boolean;
  delay: number;
}

export interface LayeredBox {
  id: string;
  color: string;
  content: string;
  position: number;
  isOverlapping: boolean;
}
