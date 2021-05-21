import React, { memo, useState } from 'react'
import { Container,Footer, Grid, Header,  Row,Col} from 'rsuite'
import Products from '../component/Products'
import SideBar from '../component/SideBar'
import PRODUCTS from '../db/products.json'
import '../styles/main.scss'


const Home = () => {

    const [products] = useState(PRODUCTS);

    return(
    <Container>
      <Header> Header</Header>
    
      <Grid fluid className="h-100">
      <Row className="px-0">
          <Col xs={24} md={8} className="h-100">              
         <SideBar/>
        </Col>
          <Col xs={24}  mdOffset={8}  md={16} className="h-100">
            {products.map((product, id) => (
              <div className="displayProducts" key={id}>
                <Products products={product} />
              </div>
            ))}
          </Col>
         </Row> 
         </Grid>
      
      <Footer>Footer</Footer>
    </Container>
    );

}
      
export default memo(Home)
