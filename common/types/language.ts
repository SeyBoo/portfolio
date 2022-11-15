import { StaticImageData } from 'next/image';

export interface TextI {
  highlighted: boolean;
  data: string;
}

export interface IntroI {
  title: string; 
  subTitle: TextI[][];
  callToAction: string;
}

export interface IllustrationI {
  image: StaticImageData;
  height: number;
  text: string;
}

export interface AboutCard {
  illustration: IllustrationI;
  text: TextI[][];
}

export interface About {
  title: string;
  data: AboutCard[];
}

export interface ExperienceCardI {
  title: string;
  description: string;
  icon: StaticImageData;
  link: string;
  gradient?: string;
}

interface WorkExperiences {
  title: string;
  experiences: ExperienceCardI[];
}

interface Contact {
  title: string;
  description: string;
  callToAction: string;
}

interface TechnicalSkills {
  title: string;
  skills: string[];
}

export interface Language {
  intro: IntroI;
  about: About;
  workExperiences: WorkExperiences;
  skills: TechnicalSkills;
  technicalSkills: TechnicalSkills;
  contact: Contact;
}