import { Container } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { carSelector } from '../../../../redux';
import CarCard from '../../../Global/CarCard';
import SliderCustom from '../../../Global/Slider/SliderCustom';
import "./CarNotable.scss";
const car = [
    {
        gender : "MITSUBISHI",
        name : "MITSUBISHI XPANDER 2021",
        unitPrice : 830000,
        insuranceFees : 63750,
        images : [
            "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/mitsubishi_xpander_2021/p/g/2022/07/25/07/1n-mwc_eJiAZ6vljguYClw.jpg",
        ],
        available : true,
        description : "MITSUBISHI XPANDER 2021 mới đẹp cực kỳ sang trọng thích hợp cho các gua đình thuê xe du lịch",
        seats : 4,
        fuel : "Xăng",
        address : "Đà Nẵng",
    },
    {
        gender : "MITSUBISHI",
        name : "MITSUBISHI XPANDER 2021",
        unitPrice : 830000,
        insuranceFees : 63750,
        images : [
            "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/mitsubishi_xpander_2021/p/g/2022/07/25/07/1n-mwc_eJiAZ6vljguYClw.jpg",
        ],
        available : true,
        description : "MITSUBISHI XPANDER 2021 mới đẹp cực kỳ sang trọng thích hợp cho các gua đình thuê xe du lịch",
        seats : 4,
        fuel : "Xăng",
        address : "Đà Nẵng",
    },
    {
        gender : "MITSUBISHI",
        name : "MITSUBISHI XPANDER 2021",
        unitPrice : 830000,
        insuranceFees : 63750,
        images : [
            "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/mitsubishi_xpander_2021/p/g/2022/07/25/07/1n-mwc_eJiAZ6vljguYClw.jpg",
        ],
        available : true,
        description : "MITSUBISHI XPANDER 2021 mới đẹp cực kỳ sang trọng thích hợp cho các gua đình thuê xe du lịch",
        seats : 4,
        fuel : "Xăng",
        address : "Đà Nẵng",
    },
    {
        gender : "MITSUBISHI",
        name : "MITSUBISHI XPANDER 2021",
        unitPrice : 830000,
        insuranceFees : 63750,
        images : [
            "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/mitsubishi_xpander_2021/p/g/2022/07/25/07/1n-mwc_eJiAZ6vljguYClw.jpg",
        ],
        available : true,
        description : "MITSUBISHI XPANDER 2021 mới đẹp cực kỳ sang trọng thích hợp cho các gua đình thuê xe du lịch",
        seats : 4,
        fuel : "Xăng",
        address : "Đà Nẵng",
    },
    {
        gender : "MITSUBISHI",
        name : "MITSUBISHI XPANDER 2021",
        unitPrice : 830000,
        insuranceFees : 63750,
        images : [
            "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/mitsubishi_xpander_2021/p/g/2022/07/25/07/1n-mwc_eJiAZ6vljguYClw.jpg",
        ],
        available : true,
        description : "MITSUBISHI XPANDER 2021 mới đẹp cực kỳ sang trọng thích hợp cho các gua đình thuê xe du lịch",
        seats : 4,
        fuel : "Xăng",
        address : "Đà Nẵng",
    },
    {
        gender : "MITSUBISHI",
        name : "MITSUBISHI XPANDER 2021",
        unitPrice : 830000,
        insuranceFees : 63750,
        images : [
            "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/mitsubishi_xpander_2021/p/g/2022/07/25/07/1n-mwc_eJiAZ6vljguYClw.jpg",
        ],
        available : true,
        description : "MITSUBISHI XPANDER 2021 mới đẹp cực kỳ sang trọng thích hợp cho các gua đình thuê xe du lịch",
        seats : 4,
        fuel : "Xăng",
        address : "Đà Nẵng",
    },
    {
        gender : "MITSUBISHI",
        name : "MITSUBISHI XPANDER 2021",
        unitPrice : 830000,
        insuranceFees : 63750,
        images : [
            "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/mitsubishi_xpander_2021/p/g/2022/07/25/07/1n-mwc_eJiAZ6vljguYClw.jpg",
        ],
        available : true,
        description : "MITSUBISHI XPANDER 2021 mới đẹp cực kỳ sang trọng thích hợp cho các gua đình thuê xe du lịch",
        seats : 4,
        fuel : "Xăng",
        address : "Đà Nẵng",
    },
]
const settings ={
    arrows : false,
}

const CarNotable = () => {
    const {getCars} = useSelector(carSelector);
    console.log(getCars.values);
  return (
    <Container maxWidth='lg' className='car__notable'>
        {getCars.isLoading?
            <div>Loading</div>:
            <>
                <h3 className='car__notable__title' >XE NỔI BẬT - XE TỰ LÁI</h3>
                <SliderCustom customSetting={settings} >
                    {getCars.values?.map((item , index)=>{
                        return (
                            <CarCard key={index} itemCar={item} />
                        )
                    })}
                </SliderCustom>
            </>
        }
    </Container>
  )
}

export default CarNotable
