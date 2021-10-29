import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import AllOrders from './components/AllOrders/AllOrders';
import Landing from './components/Home/Landing/Landing';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route exact path="/home">
                <Landing />
            </Route>
            <PrivateRoute exact path="/addService">
                <AddService />
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
                <AllOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <PrivateRoute exact path="/registration/:id">
                <Registration />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
