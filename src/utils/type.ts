import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type NavItem = {
  name: string;
  id: string;
};

export type Skill = {
  image: string;
  name: string;
  invert?: boolean;
};

export type Contact = {
  name: string;
  icon?: IconDefinition;
  link: string;
  wide?: boolean;
};

export type Project = {
  name: string;
  description: string;
  link: string;
  tags: string[];
  icon: IconDefinition;
  image?: string;
};
