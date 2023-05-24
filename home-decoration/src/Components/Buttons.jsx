import {Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useGlobel } from '../Content';

function Buttons() {
  const {setvalue,funrun}=useGlobel()
  return (
    <>
      <Button variant="outline-secondary " className='m-1 py-1 px-1'>All</Button>
      <Button variant="outline-secondary " className='m-1 py-1 px-1' >Ikea</Button>
      <Button variant="outline-secondary " className='m-1 py-1 px-1'>Marcos</Button>
      <Button variant="outline-secondary " className='m-1 py-1 px-1'>Caressa</Button>
      <Button variant="outline-secondary " className='m-1 py-1 px-1'>Liddy</Button>

    </>
  );
}

export default Buttons;