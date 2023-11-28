import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState(0); // Start with the index of the tab you want to be active initially

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Perform actions based on the new value if needed
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value={0}
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value={1}
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value={2}
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value={3} icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
