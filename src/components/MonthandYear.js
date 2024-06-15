import React from 'react';

const MonthandYear = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const now = new Date();
  const dayOfWeek = dayNames[now.getDay()];
  const month = monthNames[now.getMonth()];
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();

  return (
    <p className='paragraph'>Dafetite Ogaga • {dayOfWeek}, {month} {dayOfMonth}, {year}</p>
  );
};

export default MonthandYear;
