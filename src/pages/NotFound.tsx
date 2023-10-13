import { Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sx={{ color: '#000' }}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h6">This page could not be found.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to={'/'}>
            <Button  
              sx={{ 
                p: 2,
                borderRadius: '2rem',
                color: '#000',
                bgcolor: '#f5f5f5',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: '#ccc',
                  boxShadow: 'none'
                }
              }}
            >
              Back to Home
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default NotFound