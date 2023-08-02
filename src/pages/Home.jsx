import React, { useEffect, useState } from 'react';
import Helmet from '../components/helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductList from '../components/ui/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/ui/Clock';

const Home = () => {
  const year=new Date().getFullYear();
  const[trendingProducts,setTrendingProducts]=useState([]);
  const[bestSalesProducts,setBestSalesProducts]=useState([]);
  const[mobileProducts,setMobileProducts]=useState([]);
  const[wirelessProducts,setWirelessProducts]=useState([]);
  const[popularProducts,setPopularProducts]=useState([]);

  useEffect(()=>{
    const filteredTrendingProducts=products.filter(
      (item)=>item.category ==="chair"
    );
    const filteredBestSalesProducts=products.filter(
      (item)=>item.category ==="sofa"
    );
    const filteredMobileProducts=products.filter(
      (item)=>item.category ==="mobile"
    );
    const filteredWirelessProducts=products.filter(
      (item)=>item.category ==="wireless"
    );
    const filteredPopularProducts=products.filter(
      (item)=>item.category ==="watch"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  },[]);

  return<Helmet title={"Home"}>
<section className='hero_section'>
  <Container>
    <Row>
      <Col lg='6' md='6'>
      <div className="hero_content">
        <p className="hero_subtitle">Trending Products In {year}</p>
        <h2>Make Your Interior More Minimalistic & Modern</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ullam quia error dolores reiciendis eveniet, quaerat suscipit voluptates 
           animi impedit saepe vel sunt velit cum fugit ipsum quidem tempora tenetur 
           libero.</p>
           <motion.button whileTap={{scale:1.2}} className="shop_btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
      </div>
      </Col>
      <Col lg='6' md='6'>
        <div className="hero_img">
          <img src={heroImg } alt="heroImg" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
  <Services/>
  <section className="trending_products">
    <Container>
      <Row>
        <Col lg='12' className='text-center mb-5'>
          <h2 className='section_title'>Trending Products</h2>
        </Col>
        <ProductList data={trendingProducts}/>
      </Row>
    </Container>
  </section>
  <section className="best_sales">
    <Container>
      <Row>
        <Col lg='12' className='text-center mb-5'>
        <h3 className="section_title">Best Sales</h3>
        </Col>
        <ProductList data={bestSalesProducts}/>
      </Row>
    </Container>
  </section>
  <section className="timer_count">
  <Container>
      <Row>
        <Col lg='6' md='12' className='count_doen-col'>
        <div className="clock_top-content">
          <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
          <h3 className='text-white fs-5 mb-3'>Quality ArmChair</h3>
        </div>
          <Clock/>
          <motion.button whileTap={{scale:1.2}} className="shop_btn store_btn">
          Visit Store  
          </motion.button>
        </Col>

        <Col lg='6' md='12' className='text-end counter_img'>
          <img src={counterImg} alt="counterImg" />
        </Col> 
      </Row>
    </Container>
  </section>
  <section className="new_arrivals">
    <Container>
      <Row>
        <Col lg='12' className='text-center mb-5'>
        <h3 className="section_title">New Arrivals</h3>
        </Col>
        <ProductList data={mobileProducts}/>
        <ProductList data={wirelessProducts}/>
      </Row>
    </Container>
  </section>
  <section className="popular_category">
    <Container>
      <Row>
        <Col lg='12' className='text-center mb-5'>
        <h3 className="section_title">Popular in Category</h3>
        </Col>
        <ProductList data={popularProducts}/>
      </Row>
    </Container>
  </section>
  </Helmet>
  
}
 
export default Home