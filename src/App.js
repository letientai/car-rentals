import React, { Fragment } from 'react';
import {Routes , Route} from 'react-router-dom';
import DefaultLayout from './components/CustomLayout/DefaultLayout';
import routes from './routers';
const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App
