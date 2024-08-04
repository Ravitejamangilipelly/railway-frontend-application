import React, { useState, useEffect } from 'react';
import { getBookingDetails } from '../../api';

const BookingDetails = ({ booking_id }) => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await getBookingDetails(booking_id, token);
        setBooking(response.data);
      } catch (error) {
        console.error('Failed to fetch booking details', error);
      }
    };

    fetchBookingDetails();
  }, [booking_id]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Booking Details</h3>
      <p>Booking ID: {booking.id}</p>
      <p>User ID: {booking.user_id}</p>
      <p>Train ID: {booking.train_id}</p>
    </div>
  );
};

export default BookingDetails;
