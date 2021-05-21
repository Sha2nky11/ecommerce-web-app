import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Divider, Drawer } from 'rsuite'
import { useProfile } from '../../misc/profile.context'

const DashBoard = ({onSignOut}) => {
    
    const {profile} = useProfile();

    return (
         <>
                <Drawer.Header>
                    <h2> Hey {profile.name} </h2>
                </Drawer.Header>
                <Drawer.Body>
                <Divider />

                    <h2 className="text-align-center">Categories</h2>
                <Divider />
                <Link to ="/headphones">
                     <Button> - HeadPhones</Button>
                </Link>
                        <hr />
                <Link to="/keyboards">
                     <Button> - Keyboards</Button>
                </Link>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button block onClick={onSignOut} color="orange">
                        Signout
                    </Button>
                </Drawer.Footer>
        </>
    )
}
export default DashBoard
