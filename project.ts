import { DbDocument, LocalizedString } from "./shared";

export interface Project extends DbDocument {
  name: LocalizedString[];
  company: string;
  description: LocalizedString[];
  startDate: number | null;
  endDate: number | null;
  keywords: LocalizedString[];
  url: string | null;
  order: number | null;
  bullets: LocalizedString[];
}
