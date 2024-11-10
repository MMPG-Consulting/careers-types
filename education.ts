import { DbDocument, LocalizedString } from "./shared";

export interface Education extends DbDocument {
  institution: LocalizedString[];
  degree: LocalizedString[];
  fieldOfStudy: LocalizedString[] | null;
  country: LocalizedString[] | null;
  city: LocalizedString[] | null;
  start: number;
  end: number | null;
  description: LocalizedString[] | null;
  bullets: LocalizedString[] | null;
  purpose: string[] | null;
}
