import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LabelBottomNavigation() {
  const router = useRouter();
  const [value, setValue] = useState(0); // State to keep track of the selected value

  const handleChange = (event, newValue) => {
    const routes = ['/', '/history', '/sendrequest', '/schedule', '/profile'];

    router.push(routes[newValue]);
    setValue(newValue); // Update the selected value
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value={0}
        showLabel
        icon={<HomeIcon sx={{ color: value === 0 ? '#0961A1' : 'black' }} />} // Apply color conditionally
      />
      <BottomNavigationAction
        label="History"
        value={1}
        showLabel
        icon={<HistoryIcon sx={{ color: value === 1 ? '#0961A1' : 'black' }} />} // Apply color conditionally
      />
      <BottomNavigationAction
        label="Send/Request"
        value={2}
        showLabel
        icon={<CreditCardIcon sx={{ color: value === 2 ? '#0961A1' : 'black' }} />} // Apply color conditionally
      />
      <BottomNavigationAction
        label="Schedule"
        value={3}
        showLabel
        icon={<CalendarTodayIcon sx={{ fontSize: '1.5rem', color: value === 3 ? '#0961A1' : 'black' }} />} // Apply color conditionally
      />
      <BottomNavigationAction
        label="Profile"
        value={4}
        showLabel
        icon={<AccountCircleIcon sx={{ color: value === 4 ? '#0961A1' : 'black' }} />} // Apply color conditionally
      />
    </BottomNavigation>
  );
}
