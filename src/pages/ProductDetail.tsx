import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext, ProductsType } from '../@fakeDB/products'
import ProductCarousel from '../components/ProductCarousel'
import Swal from 'sweetalert2'

export type GetProductType = {
  producID: string
  productname: string
  gender: string
  img: string
  getSize: number
  price: number
  count: number
  arrSize: number[]
}

const ProductDetail = () => {
  // ** route
  const {productID} = useParams()
  // ** useContext
  const productData = React.useContext(ProductContext)
  // ** hook
  const [size, setSize] = React.useState<number>(0)
  const [count, setCount] = React.useState<number>(0)
  const [addCart, setAddCart] = React.useState<GetProductType[]>(() => {
    const storedCart = localStorage.getItem('cart') as string    
    return JSON.parse(storedCart) || [];
  })

  // Get Size
  const handleGetSize = (size:number) => {
    setSize(size)
  }

  // Get Product to Cart
  const handleGetProduct = (product:ProductsType) => {
    const addCount: number = count + 1
    setCount(addCount)
    
    setAddCart((prevProduct) => 
      [
        ...prevProduct,
        {
          producID: product.id,
          productname: product.name,
          gender: product.gender,
          img: product.img,
          getSize: size,
          price: product.price,
          count: addCount,
          arrSize: product.size
        }
      ]
    )
  }
  
  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(addCart)); 
  }, [addCart]);

  // Find Product ID
  const product:ProductsType = productData.find((product) => productID === product.id)!

  return (
    <ProductContext.Provider value={productData}>
      <Container>
        <Grid container spacing={6} sx={{ mt:2 }}>
          {product ? (
            <Grid key={product.id} item xs={12}>
              <Grid container spacing={6}>
                {/* IMG */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: 'sticky', top: '1rem' }}>
                    <img src={`https://sst1998.github.io/nike-clone/${product.img}`} alt={`product-${product.id}`} style={{ maxWidth: '40rem', width:'100%', height: 'auto', borderRadius: '1rem' }}/>
                  </Box>
                </Grid>

                {/* Detail Title */}
                <Grid item xs={12} md={4} sx={{ color:'#000' }}>
                  <Typography variant='h5' fontWeight={900} align='left'>{product.name}</Typography>
                  <Typography variant='subtitle1' fontWeight={900} align='left'>{product.gender}</Typography>
                  <Typography variant='subtitle1' sx={{ mt:1 }} fontWeight={900} align='left'>{product.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 0  })}</Typography>
                  <Typography variant='subtitle1' sx={{ mt:7 }} fontWeight={900} align='left'>เลือกไซส์</Typography>

                  {/* Size */}
                  <Grid container spacing={1}>
                      {product.size.map((size, index) => {
                        return(
                          <Grid key={index} item xs={4}>
                            <Button 
                              onClick={()=>{
                                handleGetSize(size)
                              }}
                              variant='outlined' 
                              sx={{ 
                                p:1,
                                width: '100%',
                                color: '#000',
                                borderColor: '#ccc',
                                '&:hover': {
                                  bgcolor: 'unset',
                                  borderColor: '#000'
                                },
                                '&:focus': {
                                  bgcolor: 'none',
                                  borderColor: '#000'
                                },
                              }}
                            >
                              {`US ${size}`}
                            </Button>
                          </Grid>
                        )
                      })}
                      <Grid item xs={12} sx={{ mt:2 }}>
                        <Button 
                          onClick={()=> {
                            if (size != 0) {
                              handleGetProduct(product)
                              Swal.fire({
                                title: 'Add to cart successfully.',
                                text: "",
                                icon: 'success',
                                confirmButtonColor: '#000',
                                confirmButtonText: 'OK'
                              }).then(() => {
                                window.location.hostname = `/nike-clone/product-detail/${product.id}`
                              })
                            } else {
                              Swal.fire({
                                title: 'Please select size.',
                                text: "",
                                icon: 'question',
                                confirmButtonColor: '#000',
                                confirmButtonText: 'OK'
                              })
                            }
                          }}
                          variant='contained'
                          sx={{ 
                            p:3,
                            width: '100%',
                            borderRadius: '3rem',
                            bgcolor: '#000',
                            color: '#fff',
                            '&:hover': {
                              opacity: 0.5,
                              bgcolor: '#000',
                            },
                            '&:focus': {
                              bgcolor: 'none',
                              borderColor: '#000'
                            },
                          }}
                        >
                          <Typography variant='body1'>
                            เพิ่มในตะกร้า
                          </Typography>
                        </Button>
                      </Grid>
                  </Grid>
                  <Typography variant='h6' fontWeight={900} sx={{ mt:5 }} align='left'>รายละเอียด</Typography>
                  <Divider/>
                  <Typography variant='subtitle1' sx={{ mt:2 }} align='left'>{product?.detail}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <>
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
            </>
          )} 
        </Grid>
      </Container>
      <Box sx={{ px: 2, mt:5 }}>
        <ProductCarousel title='สินค้าที่คุณอาจสนใจ'/>
      </Box>
    </ProductContext.Provider>
  )
}

export default ProductDetail