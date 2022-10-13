import React, { Fragment, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Routes , Route} from 'react-router-dom';
import carRequest from './api/carRequest';
import genreRequest from './api/genreRequest';
import DefaultLayout from './components/CustomLayout/DefaultLayout';
import Overlay from './components/Global/Overlay/Overlay';
import {carSelector, overlaySelector } from './redux';
import routes from './routers';
const App = () => {
  const dispatch = useDispatch();
  const overlay = useSelector(overlaySelector);
  const {getCars} = useSelector(carSelector);
  // useEffect(()=>{
    useMemo(()=>{
      carRequest.getCarsApi(dispatch);
      genreRequest.getGenresApi(dispatch);
    },[]);
  // },[]);
  return (
    <div >
      <Routes>
        {routes().publicRoutes.map((route , index)=>{
          let Layout = DefaultLayout;
          if(route.Layout){
            Layout = route.Layout;
          }else if(route.Layout === null){
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              path={route.path}
              key={index}
              element={
              <Layout cars={getCars.values} >
                <Page></Page>
              </Layout>}
            />
          )
        })}
      </Routes>
      {overlay.displayOverlay && <Overlay chilren={overlay.itemPropOverlay} />}
    </div>
  )
}

export default React.memo(App);
