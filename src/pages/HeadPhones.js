import React, { memo, useState } from 'react'
import { Container,Header,Footer,Grid,Row,Col } from 'rsuite';
import ProductsHeadPhones from '../component/ProductsHeadPhones';
import SideBar from '../component/SideBar';
import HEADPHONES from '../db/headphones.json'


const HeadPhones = () => {  
    const [headphones] = useState(HEADPHONES);

    return(
        <Container>
          <Header> Header</Header>
        
          <Grid fluid className="h-100">
          <Row className="px-0">
              <Col xs={24} md={8} className="h-100">              
             <SideBar/>
            </Col>
              <Col xs={24}  mdOffset={8}  md={16} className="h-100">
                {headphones.map((headphone, id) => (
                  <div className="displayProducts" key={id}>
                    <ProductsHeadPhones products={headphone} />
                  </div>
                ))}
              </Col>
             </Row> 
             </Grid>
          
          <Footer>Footer</Footer>
        </Container>
        );
    
}

export default memo(HeadPhones)
