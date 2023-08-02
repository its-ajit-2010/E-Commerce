import React, {useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import '../../styles/Product-Card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import products from '../../assets/data/products'

const ProductCard = ({item}) => {
  return (
   <Col lg='3' md='4' className='mb-2'>
    <div className="product_item">
    <div className="product_img">
        <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="productImg" />
    </div>
    <div className="p-2 product_info">
         <h3 className="product_name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
         <span className='text-center'>{item.category}</span>
    </div>
    <div className="product_card-bottom d-flex align-item-center
    justify-content-between">
        <span className="price">${item.price}</span>
        <span><i class="ri-add-line"></i></span>
    </div>
   </div>
   </Col>
  )
}

export default ProductCard