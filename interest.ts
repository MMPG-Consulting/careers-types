import { DbDocument, LocalizedString } from "./shared";

export interface Interest extends DbDocument {
  name: LocalizedString[];
  description: LocalizedString[] | null;
  keywords: LocalizedString[];
  order: number | null;
}
