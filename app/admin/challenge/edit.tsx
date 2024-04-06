import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin';

export const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="ID" />
        <TextInput source="question" validate={[required()]} label="Question" />
        <SelectInput
          source="type"
          choices={[
            { id: 'ASSIST', name: 'ASSIST' },
            { id: 'SELECT', name: 'SELECT' },
          ]}
          validate={[required()]}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" validate={[required()]} label="Order" />
      </SimpleForm>
    </Edit>
  );
};
