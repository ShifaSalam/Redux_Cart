import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
      <div className='d-flex justify-content-between bg-primary text-light p-5'>
        <div className='w-25'>
          <h3>ReduxCart 2024</h3>
          <p style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
           publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="w-25 text-center">
          <h3>Links</h3>
          <Link to={'/wish'} className='d-block my-3'>WishList</Link>
          <Link to={'/cart'}>Cart</Link>
        </div>
        <div className="w-25">
          <h3>References</h3>
          <a href="https://react-bootstrap.github.io/" target='_blank' className='my-3 d-block'>React Bootstrap</a>
          <a href="https://react.dev/" target='_blank' className='my-3 d-block'>React</a>
          <a href="https://redux.js.org/" target='_blank'>Redux</a>
        </div>
        <div className="w-25">
          <h3>Contact Us</h3>
          <p>Submit your email, so we can contact you</p>
          <input type="email" className='form-control' placeholder='Enter Email Id' />
          <button className='btn btn-outline-light mt-3'>Submit</button>
        </div>
      </div>
      <h6 className="text-center">ReduxCart 2024 &copy; All rights reserved</h6>
    </div>
    </>
  )
}

export default Footer