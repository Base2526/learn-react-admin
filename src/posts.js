import * as React from "react";
import {List, Datagrid, TextField, ReferenceField,  TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    Button,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    useRecordContext,

    SimpleList } from "react-admin"

import { useMediaQuery } from '@mui/material';
import IconEvent from '@mui/icons-material/Event';


const ListActions = () => (
    <TopToolbar>
        {/* <FilterButton filters={ [
                                   <TextInput source="q" label="Search" alwaysOn />,
                                   <ReferenceInput source="userId" label="User" reference="users">
                                       <SelectInput optionText="name" />
                                   </ReferenceInput>
                                ] 
                              }/> */}
        <CreateButton/>
        <ExportButton/>
        {/* Add your custom actions */}
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
            <IconEvent/>
        </Button>
    </TopToolbar>
);

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="title" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
    
export const PostList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return ( <List actions={<ListActions/>} filters={postFilters} >

        {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
        <Datagrid>
            {/* <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ReferenceField> */}

            <ReferenceField source="userId" reference="users" label={'==NAME=='}>
                <TextField source="name"  />
            </ReferenceField>
            {/* <ReferenceField source="userId" reference="users" label={'==EMAIL=='} >
                <TextField source="email" />
            </ReferenceField> */}
            <TextField source="id" label={'==ID=='} />
            <TextField source="title" label={'==TITLE=='} />
            <TextField source="body" label={'==BODY=='} />

            <EditButton />
        </Datagrid>)
    }
    </List>
    )
}

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

const PostTitle = () => {
        const record = useRecordContext();
       return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
        <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
    </SimpleForm>
    </Edit>
);