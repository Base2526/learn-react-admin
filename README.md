# https://marmelab.com/react-admin/Tutorial.html

# https://github.com/marmelab/react-admin/tree/master/packages/ra-data-graphql-simple



Select list
<ReferenceInput  source="create_id"  reference="users" >
    <SelectInput optionText="username" label="User" defaultValue={"62715a96a9a70e05eaed7e42"} validate={[required()]} helperText="helperText" />
</ReferenceInput>

Select multilist
<ReferenceArrayInput label="Roles" source="roles" reference="roles">
    <AutocompleteArrayInput />
</ReferenceArrayInput>
