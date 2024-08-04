import React from 'react';
import { bookSeat } from '../../api';

const TrainList = ({ trains }) => {
  const handleBook = async (train_id) => {
    try {
      const token = localStorage.getItem('token');
      await bookSeat(train_id, token);
      alert('Seat booked successfully');
    } catch (error) {
      console.error('Failed to book seat', error);
      alert('Failed to book seat');
    }
  };

  return (
    <ul>
      {trains.map((train) => (
        <li key={train.id}>
          <span>{train.train_name} - Available Seats: {train.available_seats}</span>
          <button onClick={() => handleBook(train.id)} disabled={train.available_seats <= 0}>Book</button>
        </li>
      ))}
    </ul>
  );
};

export default TrainList;
