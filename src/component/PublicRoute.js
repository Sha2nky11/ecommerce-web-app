import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../misc/profile.context'

const PublicRoute = ({children,...routeprops}) => {
        
    const {profile,isLoading} = useProfile();

    if(!profile && isLoading){
        return(
            <Container>
                <Loader vertical center content="....is loading"/>
            </Container>
        )
    }

    if(profile && !isLoading){
        return <Redirect to = "/"/>
    }

    return(
        <div>
            <Route {...routeprops}>
                {children}
            </Route>
        </div>
    )
}
export default PublicRoute

