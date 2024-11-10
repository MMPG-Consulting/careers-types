import { LOCATIONS, REGIONS } from "./constants";
import { DbDocument, LocalizedString } from "./shared";

export interface Personal extends DbDocument {
  name: string[];
  surname: string[];
  preferedFullName?: string | null;
  birthdate: number | null;
  birthplace?: LocalizedString[];
  oneLiners: OneLiner[];
  executiveSummaries: ExecutiveSummary[];
  country: string;
  region: REGIONS;
  preferences: Preferences;
  workPreferences: WorkPreferences[];
}

export interface OneLiner extends DbDocument {
  text: LocalizedString[];
  prupose: string;
}

export interface ExecutiveSummary extends DbDocument {
  text: LocalizedString[];
  prupose: string;
}

export interface Preferences {
  theme: string;
  language: string;
  timezone: string;
  contactPref: string;
}

export interface WorkPreferences {
  available: boolean;
  location: LOCATIONS;
  timezones: string[];
  idealSalary: number;
  currency: string;
  role: string | null;
  contactMe: boolean;
  relocation: boolean;
  visaSponsor: boolean;
  noticePeriod: number;
  idealCountries: string[];
  idealRegions: REGIONS[];
}
