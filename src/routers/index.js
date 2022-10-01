import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const routes = ()=>{
    const publicRoutes = [
        {path: '/', component: Home},
        {path: 'login', component: Login},
        {path: 'register', component: Register},
    ];
    const privateRoutes = [
        {path : '/'}
    ];
    return {
        publicRoutes,
        privateRoutes,
    }
}

export default routes;