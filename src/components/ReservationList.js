import React from 'react';

const ReservationList = ({ reservations }) => {
  return (
    <div>
      <h2>Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              Reservation ID: {reservation.id} | User: {reservation.user} | Slot ID: {reservation.slotId}
            </li>
          ))}
        </ul
