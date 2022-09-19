export type Props = {
  group: string;
  package: string;
  title: string;
  order: number;
  slug: string;
  category: string;
  description: string;
  componentPrefix: string;
  props: string[];
  import: string;
  source: string;
  docs: string;
  styles: string[];
  children?: React.ReactNode;
}

export type ListProps = {
  [key: string]: Props[];
}
