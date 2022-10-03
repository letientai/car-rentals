import { Container } from '@mui/material';
import React from 'react';
import Direction from './Direction';
import Feature from './Feature';
import "./Intro.scss";
import Lease from './Lease';
const Intro = () => {
  return (
    <>
    <Container maxWidth='lg' className='intro' >
        <Feature/>
        <Direction/>
    </Container>
    <Lease/>
    </>
  )
}

export default Intro
