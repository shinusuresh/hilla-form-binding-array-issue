import { useForm, useFormArrayPart, useFormPart } from '@vaadin/hilla-react-form';
import { Button, NumberField, TextField } from '@vaadin/react-components';
import GroupModel from 'Frontend/generated/com/example/application/views/groups/GroupModel';
import PersonModel from 'Frontend/generated/com/example/application/views/groups/PersonModel';

function PersonForm({ model, remove }: { model: PersonModel; remove: () => void }) {
  const { field } = useFormPart(model);

  return (
    <div>
      <TextField {...field(model.fullName)} />
      <NumberField {...field(model.age)} />
      <Button onClick={remove}>Remove</Button>
    </div>
  );
}

export default function GroupFormView() {
  const { field, model, read } = useForm(GroupModel);
  const { items, value, setValue } = useFormArrayPart(model.people);

  return (
    <>
      {/* <TextField {...field(model.name)} /> */}
      {items?.map((person, index) => (
        <PersonForm key={index} model={person} remove={() => setValue(value!.filter((_, i) => i !== index))} />
      ))}
      <Button onClick={() => setValue([...(value || []), PersonModel.createEmptyValue()])}>Add person</Button>
    </>
  );
}
