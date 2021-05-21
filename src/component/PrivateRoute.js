import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../misc/profile.context'

const PrivateRoute = ({children , ...routeProps}) => {
        
        const {isLoading,profile} = useProfile();

        if(!profile && isLoading){
            return(
                <Container>
                    <Loader center vertical content="....is loading" size="md" speed="normal"/>
                </Container>
            ) 
        }

        if(!profile && !isLoading){
            return <Redirect to = "/signin"/>
        }
        
        return(
            <Route {...routeProps}>{children}</Route>
    )
}
export default PrivateRoute
