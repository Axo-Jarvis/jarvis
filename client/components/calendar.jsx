import React, { createContext, useEffect, useState, useContext }  from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar({ onDateChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar onChange={(date) => onDateChange(date['$d'])} />
    </LocalizationProvider>
  );
}