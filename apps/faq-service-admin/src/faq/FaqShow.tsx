import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const FaqShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Question" source="question" />
        <TextField label="Answer" source="answer" />
        <TextField label="Langcode" source="langcode" />
        <BooleanField label="Status" source="status" />
        <TextField label="FaqOrder" source="faqOrder" />
        <TextField label="Created" source="created" />
        <TextField label="Changed" source="changed" />
      </SimpleShowLayout>
    </Show>
  );
};
