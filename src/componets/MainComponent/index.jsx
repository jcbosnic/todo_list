import React, { useState } from "react";
import UserList from "../ListUsers";
import { v4 as uuidv4 } from 'uuid'
import {Container, FormSection, ListSection} from './styles'
//Components
import FormUser from "../AddUserForm";
import EditFormUser from "../EditUserForm";


const MainComponent = () => {

  //Data Inicial
  // const usersData = [
  //   {id: uuidv4(), name: 'Juan Carlos', username: 'JC'},
  //   {id: uuidv4(), name: 'Daisy', username: 'Mi amor'},
  //   {id: uuidv4(), name: 'Celeste', username: 'Cele'}
  // ]


  //Estados
  const [users, setUsers] = useState([])
  const [edit, setEdit] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: ''
  })

//Agregar Usuario
  const addUSer = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users, user
    ])
  }

  //Elminar Usuarios
  const deleteUser = id => {
    const filerUsers = users.filter(user => user.id !== id)
    setUsers(filerUsers)
  }

  //Traspasar usuarios a cada input
  const editRow = user => {
    setEdit(true)
    setCurrentUser({
      id : user.id,
      name: user.name,
      username: user.username
    })
  }

  //Actualizar Usuario
  const updateUser = ( id, updateUser ) => {
    setEdit(false)
    setUsers(users.map( user => (user.id === id ? updateUser : user)))
  }

  return (  
    <Container>
      <h1> Formulario</h1>
        {
          edit ? (
            <FormSection>
              <h3>Editar</h3>  
              <EditFormUser 
                currentUser={currentUser} 
                updateUser = { updateUser }
              />
            </FormSection>
          ) : (
            <ListSection>
              <h3>Tareas</h3> 
              <FormUser addUSer = { addUSer } />
            </ListSection>
          )
        }
     <UserList 
      users = { users } 
      deleteUser = { deleteUser } 
      editRow = { editRow }
    />
    </Container>
  );
}

export default MainComponent;