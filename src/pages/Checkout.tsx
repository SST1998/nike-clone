// ** React Imports
import * as React from 'react'
import { Link } from 'react-router-dom';

// ** MUI Imports
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
import CreditCardIcon from '@mui/icons-material/CreditCard';

// ** Context
import { ProductContext } from '../@fakeDB/products'

// ** Other
import { GetProductType } from './ProductDetail'
import Swal from 'sweetalert2';


const Checkout = () => {
  const productData = React.useContext(ProductContext)
  // ** hook
  const [data, setData] = React.useState<GetProductType[]>([])
  const [totalPrice, setTotalPrice] = React.useState<number>(0)
  const [credit, setCredit] = React.useState<boolean>(true)
  const [paypal, setPaypal] = React.useState<boolean>(false)
  const [isCredit, setIsCredit] = React.useState<boolean>(false)
  const [isPaypal, setIsPaypal] = React.useState<boolean>(false)

  const handleClickCredit = () => {
    setCredit(true);
    setPaypal(false);
  }

  const handleClickPaypal = () => {
    setCredit(false);
    setPaypal(true);
  }

  const handleCheckedCredit = () => {
    setIsCredit(isChecked => !isChecked ? true : false);
    setIsPaypal(false);
  }

  const handleCheckedPaypal = () => {
    setIsCredit(false);
    setIsPaypal(isChecked => !isChecked ? true : false);
  }
  
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
  return (
    <>
      <ProductContext.Provider value={productData}>
        <Box sx={{ mt:5 }}>
          <Container>
            <Grid container rowSpacing={7} columnSpacing={7} justifyContent={'center'}>       

              {/* Checkout form */}
              <Grid item xs={12} md={4}>
                <Grid container spacing={3}>

                  {/* Address */}
                  <Grid item xs={12}>
                    <Typography variant='h6' fontWeight={900} sx={{ color: '#000' }} align='left'>ป้อนชื่อและที่อยู่:</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField label='ชื่อ' />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField label='นามสกุล' />
                    </FormControl>
                  </Grid> 
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField label='ที่อยู่' />  
                    </FormControl>
                  </Grid>

                  {/* Contact */}
                  <Grid item xs={12}>
                    <Typography variant='h6' fontWeight={900} sx={{ color: '#000' }} align='left'>โปรดป้อนข้อมูลการติดต่อ</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField label='อีเมล' />  
                    </FormControl>
                  </Grid> 
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField label='หมายเลขโทรศัพท์' />  
                    </FormControl>
                  </Grid>

                  {/* ฃ่องทางการชำระเงิน */}
                  <Grid item xs={12}>
                    <Typography variant='h6' fontWeight={900} sx={{ color: '#000' }} align='left'>คุณต้องการชำระเงินอย่างไร</Typography>
                  </Grid>

                  {/* Credit */}
                  <Grid item xs={12}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Button 
                        onClick={handleClickCredit}
                        variant='outlined'
                        sx={{ 
                          p:3,
                          width: '100%',
                          borderRadius: '0.5rem',
                          border: '1px solid #ccc',
                          bgcolor: 'unset',
                          color: '#000',
                          boxShadow: 'none',
                          '&:hover': {
                            bgcolor: 'unset',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                          },
                          '&:focus': {
                            bgcolor: 'none',
                            borderColor: '#000',
                            boxShadow: 'none',
                          },
                          '&.MuiButton-root': {
                            justifyContent: 'flex-start'
                          }
                        }}
                        startIcon={<CreditCardIcon />}
                      >
                        <Typography variant='body1' sx={{ fontWeight: 900 }}>
                          บัตรเครดิตหรือเดบิต
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>

                  {/* Paypal */}
                  <Grid item xs={12}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Button 
                        onClick={handleClickPaypal}
                        variant='outlined'
                        sx={{ 
                          p:3,
                          width: '100%',
                          borderRadius: '0.5rem',
                          border: '1px solid #ccc',
                          bgcolor: 'unset',
                          color: '#000',
                          boxShadow: 'none',
                          '&:hover': {
                            bgcolor: 'unset',
                            border: '1px solid #ccc',
                            boxShadow: 'none',
                          },
                          '&:focus': {
                            bgcolor: 'none',
                            borderColor: '#000',
                            boxShadow: 'none',
                          },
                          '&.MuiButton-root': {
                            justifyContent: 'flex-start'
                          }
                        }}
                      >
                        <img src='img/paypal.webp' width={55} />
                      </Button>
                    </Box>
                  </Grid>

                  { credit ? (
                    <>
                      {/* Credit Detail*/}
                      <Grid item xs={12}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Typography variant='h6' fontWeight={900} sx={{ color: '#000' }} align='left'>ป้อนรายละเอียดการชำระเงินของคุณ:</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <TextField label='ชื่อบัตร' />  
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <TextField label='หมายเลขบัตร' />  
                            </FormControl>
                          </Grid>
                          <Grid item xs={6}>
                            <FormControl fullWidth>
                              <TextField label='MM/YY' />  
                            </FormControl>
                          </Grid>
                          <Grid item xs={6}>
                            <FormControl fullWidth>
                              <TextField label='CVV' />  
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel 
                              control={
                                <Checkbox
                                  onClick={handleCheckedCredit}
                                  sx={{
                                    '&.Mui-checked': {
                                      color: '#000',
                                    },
                                  }}
                                />
                              }  
                              label={
                                <>
                                การคลิก "สั่งซื้อ" หมายความว่าคุณยอมรับ<Link style={{ color:"#7a7a7a", textDecorationColor: '#000'}} to='#' target='_blank'>{'ข้อกำหนดและเงื่อนไขของ eShopWorld'}</Link>
                                </>
                              } 
                              sx={{ 
                                color: '#7a7a7a',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'flex-start'
                              }}
                            />
                          </Grid>
                          {/* Submit */}
                          <Grid item xs={12}>
                            <Box 
                              sx={{ 
                                mt: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}
                            >
                              <Button 
                                disabled={!isCredit ? true : false}
                                onClick={()=>{
                                  Swal.fire({
                                    title: 'Checkout succesfully',
                                    text: "",
                                    icon: 'success',
                                    confirmButtonColor: '#000',
                                    confirmButtonText: 'OK'
                                  }).then(() => {
                                    window.location.href = '/nike-clone';
                                  })
                                }}
                                variant='contained'
                                sx={{ 
                                  py:2,
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
                                  สั่งซื้อ
                                </Typography>
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  ) : (
                    <>
                      {/* Paypal Detail*/}
                      <Grid item xs={12}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <FormControlLabel 
                              control={
                                <Checkbox
                                  onClick={handleCheckedPaypal}
                                  sx={{
                                    '&.Mui-checked': {
                                      color: '#000',
                                    },
                                  }}
                                />
                              }  
                              label={
                                <>
                                การคลิก "ชำระด้วย PayPal" หมายความว่าคุณยอมรับข้อกำหนดและเงื่อนไข<Link style={{ color:"#7a7a7a", textDecorationColor: '#000'}} to='https://www.eshopworld.com/shoppers/help/terms-and-conditions-of-sale-th/' target='_blank'> ของ eShopWorld.</Link>
                                </>
                              } 
                              sx={{ 
                                color: '#7a7a7a',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'flex-start'
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Box 
                              sx={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}
                            >
                              <Button 
                                disabled={!isPaypal ? true : false}
                                variant='contained'
                                href='https://www.paypal.com/us/home'
                                target='_blank'
                                sx={{ 
                                  py: 1.5,
                                  width: '100%',
                                  borderRadius: '0.5rem',
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
                                <Typography variant='body1' sx={{ fontWeight: 900 }} textTransform={'none'}>
                                  {'ชำระเงินด้วย'}<i> Paypal</i>
                                </Typography>
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  )}
                </Grid>
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
                {data.length !== 0 ? (data.map((item, index) => {
                  return(
                    // Sub Product
                    <React.Fragment key={index}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          py: 3
                        }}
                      >
                        <img src={item.img} alt={`product-1`} style={{ maxWidth: '10rem', width:'100%', height: 'auto' }}/>
                        <Box sx={{ ml:3, width: '100%' }}>
                          <Box 
                            sx={{ 
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              mb: 1
                            }}
                          >
                            <Typography variant='body1' align='left' sx={{ mt:'0.1rem', color: '#000'}}>{item.gender}</Typography>
                            <Typography variant='body1' align='left' sx={{ mt:'0.1rem', color: '#000'}}>{item.productname}</Typography>
                            <Typography variant='body1' align='left' sx={{ mt:'0.1rem', color: '#7a7a7a'}}>จำนวน {item.count}</Typography>
                            <Typography variant='body1' align='left' sx={{ mt:'0.1rem', color: '#7a7a7a'}}>ไซส์ US {item.getSize}</Typography>
                            <Typography variant='body1' align='left' sx={{ mt:'0.1rem', color: '#7a7a7a'}}>{item.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 0  })}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </React.Fragment>
                  )
                })) : null}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ProductContext.Provider>
    </>
  )
}

export default Checkout