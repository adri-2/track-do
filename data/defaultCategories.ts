import { Category } from "@/models";

export const DEFAULT_CATEGORIES: Category[] = [
  {
    id: "food",
    name: "Alimentation",
    description: "Courses, restaurant et nourriture",
  },
  {
    id: "transport",
    name: "Transport",
    description: "Taxi, bus, carburant",
  },
  {
    id: "housing",
    name: "Logement",
    description: "Loyer et charges",
  },
  {
    id: "bills",
    name: "Factures",
    description: "Internet, téléphone, eau, électricité",
  },
  {
    id: "health",
    name: "Santé",
    description: "Consultations et médicaments",
  },
  {
    id: "education",
    name: "Éducation",
    description: "École, livres et formations",
  },
  {
    id: "shopping",
    name: "Shopping",
    description: "Vêtements et achats divers",
  },
  {
    id: "entertainment",
    name: "Loisirs",
    description: "Sorties et divertissement",
  },
  {
    id: "work",
    name: "Travail",
    description: "Dépenses professionnelles",
  },
  {
    id: "other",
    name: "Autres",
    description: "Dépenses diverses",
  },
];
