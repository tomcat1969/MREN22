import React, { useState } from 'react';
const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false

    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,

            
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
        setFormState({
            ...formState,
            submitted: true
            
        });
    }

    let message;
    if(formState.submitted){
        message=<h1>You have submitted the form</h1>;
    }else{
        message=<h1>You have not yet submitted the form</h1>;
    }
    return(
        <div>
            <p>{message}</p>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/> 
                <br/> <p>{formState.firstName.length < 2 && formState.firstName.length > 0 ? <h5>first name must be at least 2 characters</h5> : <h5></h5>}</p>       
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>  <p>{formState.lastName.length < 2 && formState.lastName.length > 0 ? <h5>last name must be at least 2 characters</h5> : <h5></h5>}</p>      
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/><p>{formState.email.length < 2 && formState.email.length > 0 ? <h5>email must be at least 2 characters</h5> : <h5></h5>}</p>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/> <p>{formState.password.length < 8 && formState.password.length > 0 ? <h5>password must be at least 8 characters</h5> : <h5></h5>}</p>       
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/> <p>{formState.confirmPassword != formState.password ? <h5>passwords must match</h5> : <h5></h5>}</p>  
                <input type="submit" />     
            </form>
            <div>
                <p>first Name : {formState.firstName}</p>
                <p>last  Name : {formState.lastName}</p>
                <p>Email : {formState.email}</p>
                <p>Password : {formState.password}</p>
                <p>confirmPassword : {formState.confirmPassword}</p>
            </div>
              
        </div>
    );
}
export default RegisterForm;
