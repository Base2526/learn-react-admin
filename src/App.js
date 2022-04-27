import logo from './logo.svg';
import './App.css';

import * as React from "react"
import {Admin, Resource, ListGuesser, EditGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server"

import PostIcon from '@mui/icons-material/Group';

import authProvider from './authProvider';
import { Dashboard } from './Dashboard';
import { UserList } from "./users"
import { PostList, PostCreate, PostEdit } from './posts';

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")

import dataProvider from './dataProvider';

function App() {
  return (
    <div className="App">
     <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
       <Resource name="users" list={UserList} edit={EditGuesser} ></Resource>
       <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}></Resource>
     </Admin>
    </div>
  );
}

export default App;
