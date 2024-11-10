import { Contact } from "./contact";
import { Education } from "./education";
import { Experience } from "./experience";
import { Interest } from "./interest";
import { Language } from "./language";
import { Personal } from "./personal";
import { Project } from "./project";
import { DbDocument } from "./shared";
import { Skill } from "./skill";

export interface Cv extends DbDocument {
  picture: Picture[];
  personal: Personal;
  contact: Contact;
  workExperience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  projects: Project[];
  template: string;
  slug: string;
  published: boolean;
  purpose: string | null;
}

export interface Picture extends DbDocument {
  url: string;
  alt: string | null;
  purpose: string[] | null;
}

export interface Template extends DbDocument {
  name: string;
  description: string;
  html: string;
  purpose: string[] | null;
}
