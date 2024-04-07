import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, incQuantity, removeFromCart } from '../Redux/Slices/cartSlice'
import { emptyCart } from '../Redux/Slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const cart = useSelector(state => state.cartReducer)
  console.log(cart)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  
  const handleCheckout=()=>{
    dispatch(emptyCart())
    alert("Every Items Checked Out!!")
    navigate('/')
  }

  const handleDecrease=(product)=>{
    if(product.quantity==1){
      dispatch(removeFromCart(product?.id))
    }
    else{
      dispatch(decQuantity(product?.id))
    }
  }

  return (
    <>
      <div className="container p-5">
        <Row>
          <Col sm={12} md={8}>
            <h3>Cart Summary</h3>
            {
              cart?.length>0?
              <table className='table table-bordered shadow'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Product Price</th>
                  <th>Count</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  cart?.map(item => (
                    <tr>
                      <td className='text-center'>{item?.id}</td>
                      <td>{item?.title}</td>
                      <td className='text-center'>
                        <img height={'130px'} src={item?.thumbnail} alt="" />
                      </td>
                      <td>{item?.price}</td>
                      <td>
                        <button className='btn' onClick={()=>{dispatch(incQuantity(item?.id))}}>+</button>
                        <input type="text" name='' value={item?.quantity} id='' className='form-control' />
                        <button className='btn' onClick={()=>{handleDecrease(item)}}>-</button>
                      </td>
                      <td className='text-center'>
                        <button className='btn border' onClick={() => { dispatch(removeFromCart(item?.id)) }}>
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>:
            <h2 className='text-center text-danger'>No Items In The Cart...</h2>
            }
            
          </Col>
          <Col sm={12} md={4}>
            <div className="border shadow p-5 mt-5">
              <h3>Total Products : <span className='text-info'>{cart?.length}</span></h3>
              <h5>Total Amount : <span className='text-warning'>{
                cart?.length>0?
                cart?.map(item => item.quantity * item.price).reduce((total, item) => total + item)
                :
                0
              }</span></h5>
            </div>
            <div className="d-grid mt-5">
              <button className='btn btn-block btn-dark' onClick={handleCheckout}>CheckOut</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cart