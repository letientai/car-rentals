import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Direction = () => {
const img = [
    {
        url: "https://www.mioto.vn/static/media/step-1.c204d3e1.svg",
        title : "Đặt xe với Mioto"
    },
    {
        url: "https://www.mioto.vn/static/media/step-2.0bcadc00.svg",
        title : "Nhận xe hoặc giao tận nơi"
    },
    {
        url: "https://www.mioto.vn/static/media/step-3.5ee48572.svg",
        title : "Trải nghiệm chuyến đi"
    },
    {
        url: "https://www.mioto.vn/static/media/step-4.518ab6a3.svg",
        title : "Kết thúc giao dịch"
    },
]
  return (
    <Container className="direction" >
        <h3 className='direction__title' >Hướng dẫn thuê xe</h3>
        <div className='background__direction' ></div>
        <Grid container >
            {img.map((item,index)=>{
                return(
                    <Grid key={index} item md={3} >
                        <div 
                        className='direction__img'
                        style={{
                            backgroundImage : 'url('+item.url+')',
                        }}
                        ></div>
                        <p className='direction__img__title' >{item.title}</p>
                    </Grid>
                )
            })}
        </Grid>
    </Container>
  )
}

export default Direction
