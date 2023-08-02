import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year=new Date().getFullYear();


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
          <div className="logo">
            <img src={''} alt="logo" />
            <div>
              <h1 className='text-white'>MultiMart</h1>
            </div>
          </div>
          <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Necessitatibus doloremque maiores enim ex nisi voluptates optio, omnis, 
              minus molestias quibusdam voluptas soluta dolore. Ea fuga saepe, dolor
              explicabo aut eos.
            </p>
          </Col>

          <Col lg='3'>
            <div className="footer_quick-links">
              <h4 className="quick_link-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          
          <Col lg='2'>
          <div className="footer_quick-links">
              <h4 className="quick_link-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          
          <Col lg='3'>
          <div className="footer_quick-links">
              <h4 className="quick_link-title">Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <p>123,Lorem ipsum dolor sit amet.</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-phone-line"></i></span>
                    <p>+919665289668/9665289925</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-line"></i></span>
                    <p>xyz@gamil.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer_copyright">Copyright {year} developed by UAM Technologies.
            All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer