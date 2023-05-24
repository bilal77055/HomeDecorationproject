import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Cartdata = () => {

    const [getdata,setdata]=useState(()=>{
        const data=JSON.parse(localStorage.getItem("lastarray"))
        return data
    })

    const navigate=useNavigate(null)


    const calculateTotalPrice = () => {
      let totalPrice = 0;
      if (getdata) {
        getdata.forEach((item) => {
          totalPrice += +(item.price);
        });
      }
      return totalPrice.toFixed(2);
    }

    const removeFromArray = (index) => {
      const updatedArray = [...getdata];
    
      if (index !== -1) {
        updatedArray.splice(index, 1);
        localStorage.setItem('lastarray', JSON.stringify(updatedArray));
        setdata(updatedArray);
      }
    };
    
    const toBAck=()=>{
      navigate('/')
    }
    
  return (
    <div className='d-flex justify-content-center w-100  p-0'>
  <Container  className='d-flex flex-column align-items-center p-0 py-2 '>
    <header>
        <h2>  you bought these items </h2>
    </header>
    {getdata && getdata.map((item)=>{
        return(<>
        <div className='realitive-div d-flex mt-2 p-2 rounded ' style={{width:"300px"}} onClick={() => removeFromArray(getdata.index)}>
            <img style={{width:"200px",height:"200px"}} className='rounded' src={item.src} alt={item.src} />
            <div className='ps-2'>
            <p> price : ${item.actualprice}</p>
            <p>quanity :  {item.quantity}</p>
            <p>subtotal :  ${item.price}</p>

          
            </div>
        </div>
        </>)
    })}
    <h1>Total: ${calculateTotalPrice()}</h1>
    <Button className='bg-transparent text-primary' onClick={toBAck} >...go to main</Button>
  </Container>
    </div>
  )
}

export default Cartdata
