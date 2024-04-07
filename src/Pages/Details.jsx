import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Details() {
  const [data,setData]=useState([])
  const {id}=useParams()

  useEffect(()=>{
    console.log(id)
    setData(JSON.parse(localStorage.getItem("response")).find(item=>item.id==id))
  },[])

  console.log(data)
  return (
    <>
      <div className="p-5 container">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img src={data?.thumbnail} className='img-fluid' style={{height:'400px'}} alt="" />
          </Col>
          <Col sm={12} md={6} lg={6} className='p-5'>
            <div className="mb-3">Product:{data?.id}</div>
            <h1 className="mb-1">{data?.title}</h1>
            <div className="mb-3">
              <span>{data.price}</span>
            </div>
            <p style={{ textAlign: 'justify' }}>{data?.description}</p>
            <div className="d-flex justify-content-between">
              <button className='btn btn-lg border'>
                <i className="fa-solid fa-heart-circle-plus"></i>
              </button>
              <button className='btn btn-lg border'>
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Details