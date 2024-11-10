export interface DbDocument {
  id: string | null;
  usr: string;
  created: number;
  updated: number | null;
  deleted: number | null;
}

export interface LocalizedString extends DbDocument {
  lang: string | "default";
  value: string;
}
