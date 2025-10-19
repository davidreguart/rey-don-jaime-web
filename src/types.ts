import React from "react";

export interface NavItem {
  nameKey: string;
  href: string;
}

export interface ProductTranslation {
  language: string;
  language_display: string;
  nombre: string;
  descripcion: string;
}

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  formatos: string[];
  activo: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string;

  // Nuevas propiedades del backend
  translations?: ProductTranslation[];
  nombre_en?: string;
  descripcion_en?: string;

  // Mantenemos campos existentes para compatibilidad con componentes
  nameKey?: string;
  imageUrl?: string;
  categoryKey: string;
  descriptionKey?: string;

  // Atributos para el cuestionario
  intensity?: "suave" | "medio" | "intenso";
  idealUsage?: string[];
  attributes?: string[];

  // Para las Cards de Producto estilo Acordeón
  subProducts?: Product[];
  isParentProduct?: boolean;
}

export interface ProcessStep {
  id: number;
  titleKey: string;
  descriptionKey: string;
  title: string; // Translated title
  description: string; // Translated description
  image: string;
}

export interface AwardBase {
  id: string;
  titleKey: string;
  competitionKey: string;
  year?: string;
  descriptionKey: string;
  iconUrl: string;
}
export interface Award extends AwardBase {
  title: string;
  competition: string;
  description: string;
}

export interface TestimonialBase {
  id: string;
  quoteKey: string;
  authorKey: string;
  roleKey: string;
  avatarUrl?: string;
}
export interface Testimonial extends TestimonialBase {
  quote: string;
  author: string;
  role: string;
}

export interface ContactInfoItemBase {
  icon: React.ReactNode;
  labelKey: string;
  valueKey: string;
  hrefKey?: string;
}

export interface ContactInfoItem
  extends Omit<ContactInfoItemBase, "labelKey" | "valueKey" | "hrefKey"> {
  label: string;
  value: string;
  href?: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface QuickLinkItem {
  nameKey: string;
  href: string;
  name?: string;
}

// Types for Oil Finder Quiz
export interface QuizOption {
  value: string;
  labelKey: string;
}
export interface QuizQuestion {
  id: string;
  questionKey: string;
  options: QuizOption[];
  answerProperty: keyof ProductAnswers;
}

export interface ProductAnswers {
  intensity?: string;
  usage?: string;
  attribute?: string;
}

// Updated props for the redesigned ProductCard
export interface RedesignedProductCardProps {
  product: Product;
  onCardClick: (product: Product) => void;
}

// Aria label key type
export type AriaExploreCategory = "products.aria.exploreCategory";
