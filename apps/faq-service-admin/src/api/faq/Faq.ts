export type Faq = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  question: string | null;
  answer: string | null;
  langcode: string | null;
  status: boolean | null;
  faqOrder: number | null;
  created: Date | null;
  changed: Date | null;
};
