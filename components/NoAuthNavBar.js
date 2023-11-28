import * as React from 'react';
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

  const handleChange = (event, newValue) => {
    const routes = ['/', '/history', '/sendRequest', '/schedule', '/profile'];

    router.push(routes[newValue]);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} onChange={handleChange}>
      <BottomNavigationAction label="Index" value={0} icon={<HomeIcon />} />
      <BottomNavigationAction label="History" value={1} icon={<HistoryIcon />} />
      <BottomNavigationAction label="Send/Request" value={2} icon={<CreditCardIcon />} />
      <BottomNavigationAction label="Schedule" value={3} icon={<CalendarTodayIcon />} />
      <BottomNavigationAction label="Profile" value={4} icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
