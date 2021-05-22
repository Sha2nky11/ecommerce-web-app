import React, { memo, useCallback } from 'react'
import { Alert, Button, Drawer, Icon } from 'rsuite';
import DashBoard from '.';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks'
import { auth } from '../../misc/firebase';

const DashBoardToggle = () => {

    const {isOpen,open,close} = useModalState();
    const isMobile = useMediaQuery('(max-width-992px)');

    const onSignOut = useCallback(() => {
            auth.signOut();
            Alert.info("Sussessfully Signed out",5000) ;
            close();
        },[close])

    return (
        <div>
          <Button block color="green" onClick={open}>
                  <Icon icon="dashboard" /> Categories
         </Button>
         <Drawer
             size="xs"
             full={isMobile}
            show={isOpen}
            onHide={close}
            placement="left"
        >
        <DashBoard onSignOut={onSignOut} />
      </Drawer>
    </div>
    )
}

export default memo(DashBoardToggle)
