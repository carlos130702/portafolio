export interface Project {
  image: string;
  title: string;
  description: string;
  tags: { name: string; class: string; icon: string }[];
  link?: string;
  github?: string;
}
