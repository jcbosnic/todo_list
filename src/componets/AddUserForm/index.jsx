import React from "react";
import { useForm } from 'react-hook-form';
import { Form, Label,InputText, Button } from './styles';

const FormUser = props => {

	//Pasamos los parametro de hook form
  const { register, handleSubmit, formState: { errors }} = useForm();

		//data es cada usuario que viene de app.js y se pasa por props
    const onSubmit = (data, e) => {
        console.log(data);
				//pasamos props de mainComponent
				props.addUSer(data)
				e.target.reset()
    }

    return ( 
    	<Form onSubmit={handleSubmit(onSubmit)} >
      	<Label>Nombre</Label>
        <InputText {...register("name", { required: true })}/>
				<div>{errors.name && <span>Campo Requerido</span>}</div>

        <Label>Tarea</Label>
        <InputText {...register("username", { required: true })}/>
				<div>{errors.username && <span>Campo Requerido</span>}</div>

        <Button>Agregar Tarea</Button>
       </Form>
     );
}
 
export default FormUser;