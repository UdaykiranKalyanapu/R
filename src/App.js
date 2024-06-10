import React, { useState } from 'react';
import './App.css';

function Appointment({ appointment, index, cancelAppointment }) {
  return (
    <div className="appointment">
      <span>{appointment}</span>
      <button onClick={() => cancelAppointment(index)}>Cancel</button>
    </div>
  );
}

function App() {
  const [appointments, setAppointments] = useState([]);
  const [value, setValue] = useState('');

  const addAppointment = (e) => {
    e.preventDefault();
    if (!value) return;
    setAppointments([...appointments, value]);
    setValue('');
  };

  const cancelAppointment = (index) => {
    const newAppointments = [...appointments];
    newAppointments.splice(index, 1);
    setAppointments(newAppointments);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Scheduler</h1>
        <form onSubmit={addAppointment}>
          <input
            type="text"
            className="input"
            placeholder="Add appointment"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div className="appointment-list">
          {appointments.map((appointment, index) => (
            <Appointment
              key={index}
              index={index}
              appointment={appointment}
              cancelAppointment={cancelAppointment}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
