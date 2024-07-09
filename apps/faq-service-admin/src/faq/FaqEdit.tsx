import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FaqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Question" source="question" />
        <TextInput label="Answer" source="answer" />
        <TextInput label="Langcode" source="langcode" />
        <BooleanInput label="Status" source="status" />
        <NumberInput step={1} label="FaqOrder" source="faqOrder" />
        <DateTimeInput label="Created" source="created" />
        <DateTimeInput label="Changed" source="changed" />
      </SimpleForm>
    </Edit>
  );
};
