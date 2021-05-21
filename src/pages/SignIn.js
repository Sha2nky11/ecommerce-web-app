import React from 'react'
import { Container,Header,Footer,Content,FlexboxGrid,Panel,Form,FormControl,FormGroup,ControlLabel,Navbar,Button,ButtonToolbar, Icon, Alert } from 'rsuite'
// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/app'
import { auth, database } from '../misc/firebase';
import '../styles/main.scss'

const signInWithProvider = async (provider) => {
    try {
        const {additionalUserInfo,user}= await auth.signInWithPopup(provider);
    
        if(additionalUserInfo.isNewUser){
            database.ref(`/profiles/${user.uid}`).set({
                name: user.displayName,
                createdAt : firebase.database.ServerValue.TIMESTAMP
            })
        }
        Alert.success("Signed In",4000);
    } catch(err) {
        Alert.error(err.message,4000);
    }
   
}

const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
}

const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
}

const SignIn = () => (
       <Container style={{backgroundColor:"#00adb5"}}>
        <Header >
        <Navbar appearance="inverse" style={{ backgroundColor: "#393e46"}}>
          <Navbar.Header>
            <h3 style={{
                  'color':'lightgrey',
                }}>Shopping App </h3>
          </Navbar.Header>
        </Navbar>
      </Header>
      <Content className="mt-page" style={{marginBottom: "160px"}} >
        <FlexboxGrid justify="center" >
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3>Login</h3>} bordered style={{backgroundColor:"#aad8d3"}}>
              <Form fluid >
                <FormGroup>
                  <ControlLabel>Username or email address</ControlLabel>
                  <FormControl name="name" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl name="password" type="password" />
                </FormGroup>
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick = {onFacebookSignIn} >Sign in</Button>
                    <Button color="cyan">
                         <Icon icon="facebook"> facebook </Icon>
                    </Button>
                    <Button color="violet"  onClick = {onGoogleSignIn}>
                         <Icon icon="google" > google</Icon>
                    </Button>
                    <Button appearance="link">Forgot password?</Button>
                  </ButtonToolbar>
                </FormGroup>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      <Footer className ="mt-3">Footer</Footer>
    </Container>
    )

export default SignIn
