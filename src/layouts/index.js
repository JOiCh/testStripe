import React from 'react'
import { Link } from 'gatsby'
import Grid from '@mui/material/Grid'
import { Button, List, ListItem, ListItemText } from '@mui/material'

export default function layout({ children }) {
  const menuWidth = '210px'
  const menuItems = [
    {
      text: 'checkout page',
      path: '/',
    },
  ]

  return (
    <Grid
      container
      style={{
        backgroundColor: '#EEEEEE',
        width: '100%',
        height: '100%',
      }}
    >
      <Grid
        item
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: '#fff',
          padding: '30px 15px',
          height: '100%',
          width: menuWidth,
          position: 'fixed',
          left: '0px',
          top: '0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <List sx={{ height: '100%' }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              activeClassName='itemActive'
              // partiallyActive={true}
              sx={{
                padding: 0,
                color: '#fff',
                opacity: '.7',
                cursor: 'pointer',
                ':hover': {
                  opacity: '1',
                },
                '&.itemActive': {
                  opacity: '1',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{ '& > span': { fontWeight: 'bold' } }}
              />
            </ListItem>
          ))}
        </List>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          sx={{ marginTop: '20px' }}
          fullWidth
        >
          Sign Out
        </Button>
      </Grid>

      <Grid item sx={{ width: '100%', height: '100%', marginLeft: menuWidth }}>
        {children}
      </Grid>
    </Grid>
  )
}
