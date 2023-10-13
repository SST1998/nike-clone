// ** MUI Imports
import Box from '@mui/material/Box'
import { Direction, Typography } from '@mui/material'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'

const PromotionCarousel = ({ direction }: { direction: Direction }) => {
  // ** Hook
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rtl: direction === 'rtl'
    },
    [
      slider => {
        let mouseOver = false
        let timeout: number | ReturnType<typeof setTimeout>
        const clearNextTimeout = () => {
          clearTimeout(timeout as number)
        }
        const nextTimeout = () => {
          clearTimeout(timeout as number)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <Box ref={ref} className='keen-slider' sx={{ p:1, overflow:'hidden', color: '#000', display: 'flex', bgcolor: '#f7f7f7', borderBottom: '1px solid #ccc' }}>
      <Box className='keen-slider__slide'>
        <Typography variant='body1'>เพลิดเพลินไปกับส่วนลด 10%</Typography>
        <Typography variant='body2'>ซื้อสินค้า 2 ชิ้นขึ้นไปสำหรับคำสั่งซื้อครั้งแรกของคุณ บน Nike App ดาวน์โหลดเลย</Typography>
      </Box>
      <Box className='keen-slider__slide'>
        <Typography variant='body1'>สไตล์ใหม่ลดราคา: ลดสูงสุดถึง 40%</Typography>
        <Typography variant='body2'>ช้อปสินค้าใหม่ทั้งหมดที่ลดราคาของเรา</Typography>
      </Box>
      <Box className='keen-slider__slide'>
        <Typography variant='body1'>จัดส่งฟรี</Typography>
        <Typography variant='body2'>สำหรับคำสั่งซื้อมูลค่า ฿5,500 บาท หรือมากกว่า ดูรายละเอียด</Typography>
      </Box>
    </Box>
  )
}

export default PromotionCarousel