import { DbDocument, LocalizedString } from "./shared";

export interface Language extends DbDocument {
  name: LocalizedString[];
  level: LocalizedString[] | null;
  order: number | null;
}
