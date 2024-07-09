import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const FaqList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FAQS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
