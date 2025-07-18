import React from 'react'
import Cart from '@/components/Cart'

const cartPage = ({cart, handleCart, handleIncrement, handleDecrement, handleDeleteItem}) => {
  return (
    <div>
      <Cart
        cart={cart}
        handleCart={handleCart}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDeleteItem={handleDeleteItem}/>
    </div>
  )
}

export default cartPage
