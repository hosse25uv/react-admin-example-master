import React from 'react'
import { Create, SimpleForm, TextInput, } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Add Product' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='price' /> 
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
