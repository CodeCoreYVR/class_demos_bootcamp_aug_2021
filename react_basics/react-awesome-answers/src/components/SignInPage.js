import React, { useState } from 'react';
import { Session } from '../requests';

function SignInPage(props) {
    const { onSignIn } = props;
    // const [inputText, setInputText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // const { currentTarget } = event;
        // const formData = new FormData(currentTarget)
        // const params = {
        //     email: formData.get('email'),
        //     password: formData.get('password')
        // }
        const params = {
            email: email,
            password: password
        }
        Session.create(params).then(data => {
            if (data.id) {
                onSignIn()
                //Navigate to the index page from the browser
                //We can "push" on history to manipulate the browser
                //and direct our user to any page in our app
                props.history.push('/questions')
            }
        })
    }

    return (
        <main>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={event => {
                        setEmail(event.currentTarget.value);
                    }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={event => {
                        setPassword(event.currentTarget.value)
                    }} />
                </div>
                <input type="submit" value="Sign In" />
            </form>
            {/* <input type="text" name="test" id="test" onChange={(event) => {
                setInputText(event.currentTarget.value)
            }} />
            <button onClick={() => console.log(inputText)}>Get Content of Test</button> */}
        </main>
    )
}

export default SignInPage;
