import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FaqWhereInput = {
  id?: StringFilter;
  question?: StringNullableFilter;
  answer?: StringNullableFilter;
  langcode?: StringNullableFilter;
  status?: BooleanNullableFilter;
  faqOrder?: IntNullableFilter;
  created?: DateTimeNullableFilter;
  changed?: DateTimeNullableFilter;
};
