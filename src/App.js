
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import NavigationBar from './components/NavigationBar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductsByCategory from './components/Home/ProductsByCategory';
import AddressForm from './pages/AddressForm';
import OrdersList from './pages/OrdersList';
function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <header>
        <NavigationBar />
      </header>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/productsbycategory/:id" element={<ProductsByCategory />} />
          <Route path="address" element={<AddressForm />} />
          <Route path="orders" element={<OrdersList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  );
}

export default App;
