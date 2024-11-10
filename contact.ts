import { DbDocument, LocalizedString } from "./shared";

export interface Contact extends DbDocument {
  email: Email[];
  phone: Phone[];
  address: Address[];
}

export interface Phone extends DbDocument {
  countryCode: string | null;
  number: string | null;
  purpose: string[] | null;
}

export interface Email extends DbDocument {
  email: string | null;
  purpose: string[] | null;
}

export interface Address extends DbDocument {
  addressLine1: LocalizedString[] | null;
  addressLine2: LocalizedString[] | null;
  city: LocalizedString[] | null;
  zip: string | null;
  country: LocalizedString[] | null;
  purpose: string[] | null;
}
