import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Product' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='price' />
      </SimpleForm>
    </Edit>
  )
}


export default PostEdit
