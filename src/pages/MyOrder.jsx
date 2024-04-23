import React, { useEffect } from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../features/user/userSlice'
import Table from 'react-bootstrap/Table';

function MyOrder() {
  const dispatch = useDispatch();
  const userOrderState = useSelector(
    (state) => state?.auth?.orders?.Orders
  );

  useEffect(() => {
    dispatch(getUserOrders())
  }, [])
  return (
    <>
      <Container className="cart-wrapper home-wrapper-2 py-5">
      <h2 className='text-center my-4'> Order Details</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>OrderId</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {userOrderState &&
              userOrderState?.map((item, index) => {
                return (
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item?.createdAt?.split("T")?.[0]}</td>
                      <td>{item?._id}</td>
                      <td>{item?.orderItems?.length}</td>
                      <td>$ {item?.totalPrice.toFixed(2)}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>

    </>
  )
}

export default MyOrder
