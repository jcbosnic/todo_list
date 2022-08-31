import React from "react";
import { useForm } from 'react-hook-form';
import { Form, Label,InputText, Button } from './styles';


const EditFormUser = (props) => {

  console.log(props.currentUser);

  const { register, handleSubmit, setValue, formState: { errors }} = useForm({
    defaultValues: props.currentUser
  });

    setValue('name', props.currentUser.name )
    setValue('username', props.currentUser.username )

		//data es cada usuario que viene de app.js y se pasa por props
    const onSubmit = (data, e) => {
        console.log(data);
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
				e.target.reset()
    }

    return ( 
       <Form onSubmit={handleSubmit(onSubmit)} >
        <Label>Nombre</Label>
        <InputText {...register("name", { required: true })}/>
				<div>{errors.nombre && <span>Campo Requerido</span>}</div>

        <Label>Nombre de Usuario</Label>
        <InputText {...register("username", { required: true })}/>
				<div>{errors.usuario && <span>Campo Requerido</span>}</div>

        <Button >Editar Usurio</Button>
       </Form>
     );
}
 
export default EditFormUser;