export type PropertyType =
  | "APARTMENT"
  | "VILLA"
  | "HOUSE"
  | "BUILDING"
  | "LAND"
  | "COMMERCIAL"
  | "OFFICE"
  | "RIAD"
  | "OTHER";

export type TransactionType = "SELL" | "RENT" | "UNSURE";

export const PROPERTY_TYPE_OPTIONS: { value: PropertyType; label: string }[] = [
  { value: "APARTMENT", label: "Appartement" },
  { value: "VILLA", label: "Villa" },
  { value: "HOUSE", label: "Maison" },
  { value: "BUILDING", label: "Immeuble" },
  { value: "LAND", label: "Terrain" },
  { value: "COMMERCIAL", label: "Commerce / Local commercial" },
  { value: "OFFICE", label: "Bureau" },
  { value: "RIAD", label: "Riad" },
  { value: "OTHER", label: "Autre" },
];

export const TRANSACTION_TYPE_OPTIONS: { value: TransactionType; label: string }[] = [
  { value: "SELL", label: "Vendre" },
  { value: "RENT", label: "Louer" },
  { value: "UNSURE", label: "Je ne sais pas encore" },
];

export type PropertyLeadFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  propertyType: PropertyType | "";
  propertyTypeOther: string;
  transactionType: TransactionType | "";
  district: string;
  message: string;
  consent: boolean;
};

/** Payload envoyé à l'API centrale — `city` n'existe pas ici : elle est
 * déduite côté serveur depuis `sourceSite`, jamais depuis une saisie. */
export type PropertyLeadPayload = {
  firstName: string;
  lastName: string;
  phone: string;
  propertyType: PropertyType;
  propertyTypeOther?: string;
  transactionType: TransactionType;
  district?: string;
  message?: string;
  sourceSite: string;
  sourcePage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  consent: boolean;
};
