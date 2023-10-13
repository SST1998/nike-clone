// ** React Imports
import * as React from 'react'

// ** MUI Imports
import { Box, Button, Container, Grid, IconButton, Link, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// ** Custom Components
import ProductCarousel from "../components/ProductCarousel";
import { GetProductType } from './ProductDetail';

const Cart = () => {
  // ** hook
  const [data, setData] = React.useState<GetProductType[]>([])
  const [totalPrice, setTotalPrice] = React.useState<number>(0)
  const [updateSize, setUpdateSize] = React.useState<number>(0)
  const [count, setCount] = React.useState<number>(0)
  
  // Get Total Price
  React.useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    const parseCart = JSON.parse(storedCart as string) || []
    setData(parseCart)
    let getTotalPrice:number = 0
    parseCart.forEach((item:GetProductType) => {
      getTotalPrice += item.price  * item.count
      setTotalPrice(getTotalPrice);
    });
  }, [])

  // Delete Product
  const handleDeleteProduct = (indexCart:number) => {
    const removeProduct = data.filter((item, index) => {
      return index !== indexCart
    })
    localStorage.setItem('cart', JSON.stringify(removeProduct))
    location.reload()
  }

  // Update Size
  const handleUpdateSize = (event: React.ChangeEvent<HTMLSelectElement>, indexCart:number) => {  
    const convertNumber:number = parseFloat(event.target.value) + updateSize;
    setUpdateSize(convertNumber)
    data.map((item, index) => {
      if (index === indexCart) {
        item.getSize = convertNumber
      }
    })
    localStorage.setItem('cart', JSON.stringify(data)); 
    location.reload()
  }

  // Update Count
  const handleUpdateCount = (event: React.ChangeEvent<HTMLSelectElement>, indexCart:number) => {  
    const convertNumber:number = parseInt(event.target.value) + count;
    setCount(convertNumber)
    data.map((item, index) => {
      if (index === indexCart) {
        item.count = convertNumber
      }
    })
    localStorage.setItem('cart', JSON.stringify(data)); 
    location.reload()
  }

  return (
    <>
      <Box sx={{ mt:5 }}>
        <Container>
          <Grid container rowSpacing={7} columnSpacing={3}>
            {/* Product */}
            <Grid item xs={12} md={8}>
              <Typography align="left" variant="h4" sx={{ color: '#000', fontWeight: 900, mb: '24px' }}>ตะกร้า</Typography>
              {data.length !== 0 ? (data.map((item, index) => {
                return(
                  // Sub Product
                  <React.Fragment key={index}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        borderBottom: '1px solid #ccc',
                        py: 3
                      }}
                    >
                      <Link underline='none' href={`/product-detail/${item.producID}`}>
                        <img src={item.img} alt={`product-1`} style={{ maxWidth: '10rem', width:'100%', height: 'auto' }}/>
                      </Link>
                      <Box sx={{ ml:3, width: '100%' }}>
                        <Box 
                          sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1
                          }}
                        >
                          <Link underline='none' href={`/product-detail/${item.producID}`}>
                            <Typography sx={{ color: '#000', fontWeight: 900 }} variant='subtitle1' align='left'>{item.productname}</Typography>
                          </Link>  
                          <Typography sx={{ color: '#000', fontWeight: 900 }} variant='subtitle1' align='right'>{item.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 0  })}</Typography>
                        </Box>
                        <Typography variant='body1' align='left' color='GrayText'>{item.gender}</Typography>
                        <Box
                          sx={{ 
                            mt: 1,
                            display: 'flex'
                          }}
                        >
                          <Typography variant='body1' align='left' color='GrayText'>{'ไซส์'}</Typography>
                          <select
                            onChange={(event:React.ChangeEvent<HTMLSelectElement>) => {
                              handleUpdateSize(event, index)
                            }}
                            defaultValue={item.getSize}
                            style={{
                              backgroundColor: 'unset', textAlign: 'center', width: '50px', color: '#000', border: 0
                            }}
                          >
                            {
                              item.arrSize.map((size, index) => {
                                return(
                                  <React.Fragment key={index}>
                                    <option value={size}>{size}</option>
                                  </React.Fragment>
                                )
                              })
                            }
                          </select>
                          <Typography variant='body1' align='left' color='GrayText' sx={{ ml:1 }}>{'จำนวน'}</Typography>
                          <select
                            onChange={(event:React.ChangeEvent<HTMLSelectElement>) => {
                              handleUpdateCount(event, index)
                            }}
                            defaultValue={item.count}
                            style={{
                              backgroundColor: 'unset', textAlign: 'center', width: '50px', color: '#000', border: 0
                            }}
                          >
                            {
                              [1,2,3,4,5,6,7,8,9,10].map((count, index) => {
                                return(
                                  <React.Fragment key={index}>
                                    <option value={count}>{count}</option>
                                  </React.Fragment>
                                )
                              })
                            }
                          </select>
                        </Box>
                        <Box 
                          sx={{ 
                            display: 'flex',
                            justifyContent: 'flex-start'
                          }}
                        >
                          <IconButton 
                            size="large" 
                            onClick={() => {
                              handleDeleteProduct(index)
                            }}
                          >
                            <DeleteOutlineIcon fontSize='inherit' />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </React.Fragment>
                )
              })) : (
                <Box>
                  <Typography align="left" variant='body1' sx={{ color: '#000', ml:2 }}>
                    ไม่มีรายการในตะกร้าของคุณ
                  </Typography>
                </Box>
              )}
              
            </Grid>
            {/* Total Price */}
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'sticky', top: '1rem' }}>
                <Typography align="left" variant="h4" sx={{ color: '#000', fontWeight: 900, mb: '24px' }}>สรุป</Typography>
                <Box sx={{ display: 'flex', justifyContent:'space-between', mb:'8px' }}>
                  <Typography align='left' variant='subtitle1' sx={{ color: '#000' }}>ยอดรวมย่อย</Typography>
                  <Typography align='right' variant='subtitle1' sx={{ color: '#000' }}>{totalPrice.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 0  })}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent:'space-between', mb:'8px' }}>
                  <Typography align='left' variant='subtitle1' sx={{ color: '#000' }}>ค่าธรรมเนียมการจัดส่งและดำเนินการโดยประมาณ</Typography>
                  <Typography align='right' variant='subtitle1' sx={{ color: '#000', ml: 8 }}>ฟรี</Typography>
                </Box>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent:'space-between', 
                    borderTop: '1px solid #ccc',
                    borderBottom: '1px solid #ccc',
                    margin: '12px 0',
                    padding: '16px 0' 
                  }}
                >
                  <Typography align='left' variant='subtitle1' sx={{ color: '#000' }}>ยอดรวม</Typography>
                  <Typography align='right' variant='subtitle1' sx={{ color: '#000', fontWeight: 900 }}>{totalPrice.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 0  })}</Typography>
                </Box>
                <Box 
                  sx={{ 
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {/* Checkout */}
                  <Button 
                    disabled={data.length === 0 ?  true : false}
                    variant='contained'
                    href='/checkout'
                    sx={{ 
                      p:3,
                      width: '100%',
                      borderRadius: '3rem',
                      bgcolor: '#000',
                      color: '#fff',
                      boxShadow: 'none',
                      '&:hover': {
                        opacity: 0.5,
                        bgcolor: '#000',
                        boxShadow: 'none',
                      },
                      '&:focus': {
                        bgcolor: 'none',
                        borderColor: '#000',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    <Typography variant='body1' sx={{ fontWeight: 900 }}>
                      เช็คเอาท์
                    </Typography>
                  </Button>

                  {/* Paypal */}
                  <Button 
                    disabled={data.length === 0 ?  true : false}
                    variant='contained'
                    target='_blank'
                    href="https://www.paypal.com/us/home"
                    sx={{ 
                      mt: 2,
                      p:3,
                      width: '100%',
                      borderRadius: '3rem',
                      bgcolor: '#f5f5f5',
                      border: '1px solid #ccc',
                      boxShadow: 'none',
                      color: '#fff',
                      '&:hover': {
                        opacity: 0.5,
                        bgcolor: '#fff',
                        boxShadow: 'none',  
                        border: '1px solid #ccc',
                      },
                      '&:focus': {
                        bgcolor: 'none',
                        boxShadow: 'none',
                        border: '1px solid #ccc',
                      },
                    }}
                  >
                    <img src='./img/paypal.png' width={55} />
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ px: 2, mt:5 }}>
          <ProductCarousel title='สินค้าที่คุณอาจสนใจ'/>
        </Box>
      </Box>
    </>
  )
}

export default Cart