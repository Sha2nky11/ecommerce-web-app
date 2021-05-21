import React, { memo, useState } from 'react'
import { Container ,Header,Row,Col,Grid,Footer} from 'rsuite';
import KEYBOARDS from '../db/keyboards.json'
import SideBar from '../component/SideBar'
import ProductsKeyboards from '../component/ProductsKeyboards';

const KeyBoards = () => {

    const [keyboards] = useState(KEYBOARDS);

    return(
        <Container>
          <Header> Header</Header>
        
          <Grid fluid className="h-100">
          <Row className="px-0">
              <Col xs={24} md={8} className="h-100">              
             <SideBar/>
            </Col>
              <Col xs={24}  mdOffset={8}  md={16} className="h-100">
                {keyboards.map((keyboard, id) => (
                  <div className="displayProducts" key={id}>
                    <ProductsKeyboards products={keyboard} />
                  </div>
                ))}
              </Col>
             </Row> 
             </Grid>
          
          <Footer>Footer</Footer>
        </Container>
        );
}

export default memo(KeyBoards)
