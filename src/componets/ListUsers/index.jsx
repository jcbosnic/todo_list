import React from "react";
import {
	Container, 
	Title, 
	ListItem, 
	ListData, 
	ListDataItem, 
	ListAction, 
	ButtonEdition 
} from './styles'

const UserList = props => {

	return (
		<Container>
			<ListItem>
				<Title>Vista y Edición de Tareas</Title>
					{
						props.users.length > 0 ?
							props.users.map(user => (
								<ListData key={user.id}>
									<ListDataItem>{user.name}</ListDataItem>
									<ListDataItem>{user.username}</ListDataItem>
									<ListAction>
										<ButtonEdition 
											onClick={() => {props.editRow(user)}}
										>
											Editar
										</ButtonEdition>
										<ButtonEdition 
											onClick={() => {props.deleteUser(user.id)}}>
											Eliminar
										</ButtonEdition>
										</ListAction>
								</ListData>

							))
							: (
							<div>
								<p>No hay Tareas</p>
							</div>
						)
					}

					</ListItem>
		</Container>
	)
}

export default UserList;