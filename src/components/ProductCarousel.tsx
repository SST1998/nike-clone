// ** React Imports
import * as React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Link, Typography } from '@mui/material'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'
import { ProductContext } from '../@fakeDB/products'

// ** Style Component
import '../styles/arrow.css'

const Arrow = (props: {
  disabled: boolean
  left?: boolean
  onClick: (e: React.SyntheticEvent<SVGSVGElement, MouseEvent>) => void;
}) => {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

interface TitleProp {
  title: string
}
const ProductCarousel = ({title}:TitleProp) => {
  const productData = React.useContext(ProductContext)

  // ** Hook
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(min-width: 560px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: {
      perView: 1,
    }
  })

  return (
    <ProductContext.Provider value={productData}>

      <Box sx={{ p:3, color: '#000', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
        <Typography variant='h5' align='left'>{title}</Typography>
        <Box>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e:React.SyntheticEvent<SVGSVGElement, MouseEvent>) =>
                  (e.stopPropagation(), instanceRef.current?.prev())
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: React.SyntheticEvent<SVGSVGElement, MouseEvent>) =>
                  (e.stopPropagation(), instanceRef.current?.next())
                }
                disabled={
                  currentSlide === instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </Box>
      </Box>
      <Box sx={{ px:3 }}>
        <Box ref={sliderRef} className='keen-slider' sx={{ pb:3, overflow:'hidden', display: 'flex' }}> 
          {productData.map((data, index) => {
            return (
              <React.Fragment key={data.id}>
                <Link underline='none' href={`/product-detail/${data.id}`}>
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
                        }}
                      >
                        <Typography variant='body1' align='left'>{data.name}</Typography>
                        <Typography variant='body2' align='left' color='GrayText'>{data.gender}</Typography>
                        <Typography sx={{ mt:1 }} variant='body1' align='left'>{data.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 0  })}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </React.Fragment>
            )
          })}
        </Box>
      </Box>
    </ProductContext.Provider>
  )
}

export default ProductCarousel
