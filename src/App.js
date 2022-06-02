import './App.css';
import { useState } from 'react';
import { Cart } from './components/states';

export default function App() {
  const [cart, updateCart] = useState(0)
  return (
    <>
      <h1>Title of the Test Branch</h1>
      <Cart cart={cart} updateCart={updateCart} />
    </>
  );
}
