import { Box, Container } from "@mui/material"
import ProductCarousel from "../components/ProductCarousel"

const Home = () => {
 
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ width:'100%', height: 'auto', overflow: 'hidden' }}>
            <img src="img/home-main-product.png" style={{ width:'100%', height: 'auto' }}/>
          </Box>
        </Container>
        <Box>
          <ProductCarousel title="สินค้าขายดี" />
        </Box>
      </Box>
    </>
  )
}

export default Home
