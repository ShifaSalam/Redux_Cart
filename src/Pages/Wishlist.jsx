import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishList } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'


function Wishlist() {
  const { wishlist } = useSelector((state) => state.wishlistReducer)
  console.log(wishlist)
  const dispatch=useDispatch()

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishList(product.id))
  }
  return (
    <>
      <div className="container p-5">
        <Row>
          {
            wishlist?.length > 0 ?
              wishlist?.map(item => (
                <Col sm={12} md={6} lg={4} xl={2}>
                  <Card>
                    <Card.Img src={item.thumbnail} height={'170px'} className='card-img-top' />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.price}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <button className='btn border' onClick={()=>{dispatch(removeFromWishList(item?.id))}}>
                          <i class="fa-solid fa-heart-circle-xmark"></i>
                        </button>
                        <button className='btn border' onClick={()=>handleAddToCart(item)}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
              :
              <h1>No Wishlist Items..</h1>
          }

        </Row>
      </div>
    </>
  )
}

export default Wishlist