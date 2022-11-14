import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Routes , Route} from 'react-router-dom';
import carRequest from './api/carRequest';
import genreRequest from './api/genreRequest';
import { AlertMessage } from './components/alert/alert';
import DefaultLayout from './components/CustomLayout/DefaultLayout';
import SimpleBackdrop from './components/Global/BackDrop/BackDrop';
import BasicAlert from './components/Global/BasicAlert/BasicAlert';
import Overlay from './components/Global/Overlay/Overlay';
import {alertSelector, carSelector, overlaySelector } from './redux';
import routes from './routers';
const App = () => {
  const dispatch = useDispatch();
  const overlay = useSelector(overlaySelector);
  const alert = useSelector(alertSelector);

  const {getCars} = useSelector(carSelector);
  useEffect(()=>{
      carRequest.getCarsApi(dispatch);
      genreRequest.getGenresApi(dispatch);
  },[]);
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
              <Layout cars={getCars?.values} >
                <Page></Page>
              </Layout>}
            />
          )
        })}
      </Routes>
      <BasicAlert title="Success" mess="thanh cong roi nha" />
      {overlay.displayOverlay && <Overlay chilren={overlay.itemPropOverlay} />}
      {alert.displayAlert && <AlertMessage chilren={alert.itemPropAlert} />}
      <SimpleBackdrop/>
    </div>
  )
}

export default App;
