import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FaqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Question" source="question" />
        <TextInput label="Answer" source="answer" />
        <TextInput label="Langcode" source="langcode" />
        <BooleanInput label="Status" source="status" />
        <NumberInput step={1} label="FaqOrder" source="faqOrder" />
        <DateTimeInput label="Created" source="created" />
        <DateTimeInput label="Changed" source="changed" />
      </SimpleForm>
    </Create>
  );
};
