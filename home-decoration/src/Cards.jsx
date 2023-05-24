import React, { useEffect, useState } from 'react';
import { useGlobel } from './Content';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cards = () => {
  const { data,state,nextdata,loading,selectedCategory,setSelectedCategory,setloading,filterData,saveobj } = useGlobel();
  

  console.log(selectedCategory);

  return (
    <Container className='ps-4 1'>

<Container className=' my-4' >
<Row>
  <Col lg={3} className=''>
  </Col>
  <Col lg={6} className=' text-center'>
  {/* <Buttons /> */}
  <Button variant="outline-secondary " className='m-1 py-1 px-1 button' onClick={() => setloading(true)}>All</Button>
  <Button variant="outline-secondary " className='m-1 py-1 px-1 button' onClick={() => setSelectedCategory('Ikea')}>Ikea</Button>
      <Button variant="outline-secondary " className='m-1 py-1 px-1 button'  onClick={() => setSelectedCategory('Caressa')}>Caressa</Button>
      <Button variant="outline-secondary " className='m-1 py-1 px-1 button'  onClick={() => setSelectedCategory('Marcos')}>Marcos</Button>
      <Button variant="outline-secondary " className='m-1 py-1 px-1 button'  onClick={() => setSelectedCategory('Liddy')}>Liddy</Button>
  </Col>
  <Col lg={3} className=''>
  </Col>
</Row>
      </Container>
 
      <Row className='justify-content-around align-items-around ps-lg-4 ps-md-4 ps-sm-4 ps-3 '>
        {loading ? (
          state.map((item) => (
            <Col key={item.id} lg={4} xs={12} sm={12} md={6} className='my-2 p-0 1' onClick={()=>{saveobj(item)}} >
              <div className='innerDiv bg-light'>
                <img src={item.src} alt={item.name} className='card-pic rounded'   />
                <div className='card-footer px-4 pt-2 bg-white rounded'>
                  <h4 className='text-secondary'>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
              </div>
            </Col>
          ))
        ) : (
          nextdata.map((item) => (
            <Col key={item.id} lg={4} xs={12} sm={6} md={6} className='my-2 p-0' onClick={()=>{saveobj(item)}}>
              <div className='innerDiv bg-light'>
                <img src={item.src} alt={item.name} className='card-pic rounded' />
                <div className='card-footer px-4 pt-2 bg-white rounded'>
                  <h4 className='text-secondary'>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Cards;


