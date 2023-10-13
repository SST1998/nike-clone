// ** MUI Imports
import { Box, Container, Grid, Link, Typography } from "@mui/material"


// ** Third Party Components
import { ProductContext } from '../@fakeDB/products'
import { useContext } from 'react'
const AllProduct = () => {
  const productData = useContext(ProductContext)
  return (
    <>
      <ProductContext.Provider value={productData}>
        <Box sx={{ mt:5 }}>
          <Container>
            <Grid container rowSpacing={7} columnSpacing={2}>
              {productData.map((data, index) => {
                return(
                  <Grid item xs={6} md={4}>
                    <Link underline="none" href={`/product-detail/${data.id}`}>
                      <Box sx={{ width: '100%' }}>
                        <Box className={`keen-slider__slide number-slide${index}`}>
                          <Box sx={{ bgcolor: '#f6f6f6' }}>
                            <img src={data.img} alt={`product-${data.id}`} style={{ maxWidth: '20rem', width:'100%', height: 'auto' }}/>
                          </Box>
                          <Box sx={{ 
                              color: '#000', 
                              display: 'flex', 
                              flexDirection: 'column', 
                              justifyContent: 'flex-start', 
                              alignItems:'flex-start', 
                              mt: 2,
                              px: 0 
                            }}
                          >
                            <Typography sx={{ mt:1 }} variant='body1' align='left'>{data.name}</Typography>
                            <Typography sx={{ mt:1 }} variant='body2' align='left' color='GrayText'>{data.gender}</Typography>
                            <Typography sx={{ mt:1 }} variant='body1'>{data.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 0  })}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  </Grid>
                )  
              })}

            </Grid>
          </Container>
        </Box>
      </ProductContext.Provider>
    </>
  )
}

export default AllProduct