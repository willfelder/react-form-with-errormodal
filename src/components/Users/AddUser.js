import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserSubmit = (e) => {
        e.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return;
        }

        if(+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid name and age'
            })
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return(
        <Wrapper>
            {error && 
                <ErrorModal 
                    title={error.title} 
                    message={error.message}
                    onConfirm={errorHandler} 
                /> 
            }
            <Card className={styles.input}>
                <form onSubmit={addUserSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type='text' 
                        id='username'
                        onChange={usernameChangeHandler}
                        value={enteredUsername} 
                    />
                    <label htmlFor='age'>Age</label>
                    <input 
                        type='number' 
                        id='age'
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default AddUser;