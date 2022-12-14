import React from "react";
import { Text, Form, Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon } from "./SignInElements";


const SignInPage =()=>{
    return(
        <Container>
            <FormWrap>
                <Icon to='/'>Halloween</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>
                            Sign in to account
                        </FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default SignInPage;