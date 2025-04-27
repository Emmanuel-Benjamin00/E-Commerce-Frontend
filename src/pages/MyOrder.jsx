import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../features/user/userSlice';
import Table from 'react-bootstrap/Table';
import { Spinner } from 'react-bootstrap'; // Import Spinner from react-bootstrap
import { colors } from '../theme.js';

function MyOrder() {
  const dispatch = useDispatch();
  const userOrderState = useSelector(
    (state) => state?.auth?.orders?.Orders
  );
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    dispatch(getUserOrders()).finally(() => {
      setLoading(false); // Set loading to false once data is fetched
    });
  }, [dispatch]);

  return (
    <Container className="cart-wrapper home-wrapper-2 py-5">
      <div style={{ minHeight: '90vh' }}>
        <h2 className='text-center pt-5 fw-bold'>Order Details</h2>

        {/* Display loader while loading */}
        {loading ? (
          <div className="text-center d-flex justify-content-center mt-5 pt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          // Conditional Rendering: Check if no orders
          userOrderState && userOrderState.length === 0 ? (
            <div className="text-center d-flex flex-column items-between justify-center mt-5 pt-5">
              <h4>No Orders Found</h4>
              <p>You have not placed any orders yet. Start shopping now!</p>
            </div>
          ) : (
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
                {userOrderState.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.createdAt?.split("T")?.[0]}</td>
                    <td>{item?._id}</td>
                    <td>{item?.orderItems?.length}</td>
                    <td>₹ {item?.totalPrice.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}
      </div>
    </Container>
  );
}

export default MyOrder;
