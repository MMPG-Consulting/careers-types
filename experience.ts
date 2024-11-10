import { DbDocument, LocalizedString } from "./shared";

export interface Experience extends DbDocument {
  company: string;
  position: LocalizedString[];
  startDate: number;
  endDate: number | null;
  description: LocalizedString[] | null;
  bullets: LocalizedString[];
  country: LocalizedString[];
  city: LocalizedString[];
  keywords: LocalizedString[];
  purpose: string[] | null;
}
