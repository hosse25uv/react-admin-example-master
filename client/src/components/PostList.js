import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  
} from 'react-admin'


const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='price' />
        <EditButton source='edit' basePath='/products' />
        <DeleteButton source='delete' basePath='/products' />
      </Datagrid>
    </List>
  )
}

export default PostList
