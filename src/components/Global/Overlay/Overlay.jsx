import React from 'react'
import { useDispatch } from 'react-redux';
import { setDisplayOverlay, setItemPropOverlay } from '../../../redux';
import "./Overlay.scss"
const Overlay = ({chilren}) => {
  const dispatch = useDispatch();
  const handleClose = (e)=>{
    e.preventDefault();
    dispatch(setDisplayOverlay(false));
    dispatch(setItemPropOverlay(<></>));
  }
  return (
    <div onClick={handleClose} className='overlay' >
      {chilren}
    </div>
  )
}

export default Overlay
