import React from 'react'
import { Panel,Row,Col,Button } from 'rsuite'

const Product = ({products}) => (
        <Panel
        style={{ marginTop: 10 }}
        header="Gaming Accessories"
        bordered
      >
        <Row>
          <Col xs={24} md={12}>
            <img
              style={{ maxHeight: '15rem', maxWidth: '100%', height: 'auto' }}
              src={products.thumbnail}
              alt={products.alt}
            />
            <h3>{products.name}</h3>
            <div>${products.price}</div>
          </Col>
          <Col xs={24}  md={12}>
            <Button
              onClick={() => {}}
              variant="contained"
              color="violet"
            >
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Panel>
    )

export default Product
