import { DbDocument, LocalizedString } from "./shared";

export interface Skill extends DbDocument {
  name: LocalizedString[];
  level: LocalizedString[] | null;
  keywords: LocalizedString[];
  icon: string | null;
  order: number | null;
}
