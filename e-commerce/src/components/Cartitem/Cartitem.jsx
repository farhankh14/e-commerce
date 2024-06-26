import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '..//assets/cart_cross_icon.png'

const Cartitem = () => {
  const { all_product, cartItems, addtocart, removefromcart } = useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product && all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-icon" onClick={() => addtocart(e.id)}>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className="cartitem-remove" src={remove_icon} onClick={() => removefromcart(e.id)} alt="" />
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
      <div className="cartitem-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>if you have a promo code entr it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cartitem
