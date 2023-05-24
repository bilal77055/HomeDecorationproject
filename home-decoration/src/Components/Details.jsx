import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const [getdata, setgetdata] = useState(() => {
    const data = JSON.parse(localStorage.getItem('item') || '{}');
    return data;
  });

  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(getdata.price || 0);
  const [addtoobj, setaddtoobj] = useState({});
  const [addtocart, setaddtocart] = useState(() => {
    const data = JSON.parse(localStorage.getItem('lastarray') || '[]');
    return data;
  });

  const [obj, setObj] = useState({
    price: subtotal,
    quantity: quantity,
    src: getdata.src,
    actualprice: getdata.price
  });
  
  const navigate = useNavigate(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate('/cartdata');
  };

  const handleShow = () => {
    setShow(true);
  };

  const changeQuantity = (e) => {
    if (e.target.innerHTML === '+') {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      const newSubtotal = (newQuantity * getdata.price).toFixed(2);
      setSubtotal(newSubtotal);
      setObj({
        price: newSubtotal,
        quantity: newQuantity,
        src: getdata.src,
        actualprice: getdata.price
      });
    } else {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        const newSubtotal = (newQuantity * getdata.price).toFixed(2);
        setSubtotal(newSubtotal);
        setObj({
          price: newSubtotal,
          quantity: newQuantity,
          src: getdata.src,
          actualprice: getdata.price
        });
      }
    }
  };



  const lastarray = () => {
    setaddtoobj(obj);
    setaddtocart([...addtocart, obj]);
    localStorage.setItem('lastarray', JSON.stringify([...addtocart, obj]));
    handleShow();
  };

  const goback = () => {
    navigate('/');
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{getdata.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>CONGRATULATIONS YOU BOUGHT THIS ITEM</Modal.Body>
      </Modal>
      {getdata && (
        <div className='detail-data d-flex justify-content-center align-items-center '>
          <div style={{ width: '500px' }} className='  d-flex flex-column align-items-center' >
            <img className=' rounded w-100 ' style={{ height: '300px' }} src={getdata.src} alt={getdata.name} />
            <h1 className='fs-5 mt-1'>{getdata.name}</h1>
            <p>${getdata.price}</p>
            <div className='d-flex justify-content-around' style={{ width: '100px' }}>
              <Button className='px-3' onClick={changeQuantity}>
                +
              </Button>
              <span>
                <strong>{quantity}</strong>
              </span>
              <Button onClick={changeQuantity}>-</Button>
            </div>
            <h4>subtotal: ${subtotal}</h4>
            <div>
              <Button onClick={lastarray} className='mx-1'>
                Add to cart
              </Button>
              <Button onClick={goback}>go back ...</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;

