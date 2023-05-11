import React, { useState } from 'react';
import Map from './components/Map';
import ReservationForm from './components/ReservationForm';
import ParkingSlotList from './components/ParkingSlotList';

const App = () => {
  const [parkingSlots, setParkingSlots] = useState([]);

  const handleAddParkingSlot = (newParkingSlot) => {
    setParkingSlots([...parkingSlots, newParkingSlot]);
  };

  return (
    <div className="container">
      <h1>Smart Parking App</h1>
      <ReservationForm onAddParkingSlot={handleAddParkingSlot} />
      <Map parkingSlots={parkingSlots} />
      <ParkingSlotList parkingSlots={parkingSlots} />
    </div>
  );
};

export default App;
