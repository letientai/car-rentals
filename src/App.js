import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Routes , Route} from 'react-router-dom';
import carRequest from './api/carRequest';
import DefaultLayout from './components/CustomLayout/DefaultLayout';
import Overlay from './components/Global/Overlay/Overlay';
import {overlaySelector } from './redux';
import routes from './routers';
const App = () => {
  const dispatch = useDispatch();
  const overlay = useSelector(overlaySelector);
  useEffect(()=>{
    carRequest.getCarsApi(dispatch);
  },[])
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
              <Layout>
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

export default App
