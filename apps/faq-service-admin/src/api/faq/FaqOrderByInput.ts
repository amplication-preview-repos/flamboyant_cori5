import { SortOrder } from "../../util/SortOrder";

export type FaqOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  question?: SortOrder;
  answer?: SortOrder;
  langcode?: SortOrder;
  status?: SortOrder;
  faqOrder?: SortOrder;
  created?: SortOrder;
  changed?: SortOrder;
};
