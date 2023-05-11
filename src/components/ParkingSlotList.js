import React from 'react';

const ParkingSlotList = ({ parkingSlots }) => {
  return (
    <div>
      <h2>Parking Slots</h2>
      {parkingSlots.length === 0 ? (
        <p>No parking slots available.</p>
      ) : (
        <ul>
          {parkingSlots.map((slot) => (
            <li key={slot.id}>
              Slot ID: {slot.id} | Dimensions: {slot.dimensions} | Availability: {slot.isAvailable ? 'Available' : 'Occupied'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ParkingSlotList;
