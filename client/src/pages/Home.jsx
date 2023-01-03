import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import FolderList from '../components/FolderList';
import PushNotification from '../components/PushNotification';
import UserMenu from '../components/UserMenu';

export default function Home() {
  const { folders } = useLoaderData();

  // console.log('[HomePage]',{data});

  return (
    <>
      <Typography variant='h4' sx={{ mb: '20px' }}>
        Note App
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
        <UserMenu />
        <PushNotification />
      </Box>

      <Grid
        container
        sx={{ height: '50vh', boxShadow: '0 0 15px 0 rgb(193 193 193 / 60%)' }}
      >
        <Grid item xs={3} sx={{ height: '100%' }}>
          <FolderList folders={folders} />
        </Grid>
        <Grid item xs={9} sx={{ height: '100%' }}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
