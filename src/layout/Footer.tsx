
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Container } from "@mui/material";

export const Footer = () => {
  return (
    <Box component="footer"
      className="footer"
      sx={{
        mt: 10,
        backgroundColor: '#000',
      }}
    >
      <Container sx={{ p:3 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              ค้นหาร้าน
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              สมัครเป็น MEMBER
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              รับความช่วยเหลือ
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              สถานะคำสั่งซื้อ
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              การส่งมอบ
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              การคืนสินค้า
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              ทางเลือกการชำระเงิน
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              ติดต่อเรา
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              เกี่ยวกับ NIKE
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              ข่าวสาร
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              ร่วมงานกับเรา
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              ร่วมลงทุนกับเรา
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt:1 }}>
              ความยั่งยืน
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3} md={4} lg={3} xl={3} sx={{ display: 'flex', justifyContent:'space-evenly' }}>
            <Link href="https://www.twitter.com/Nike" color="inherit" target='_blank'>
              <Twitter sx={{ fontSize: '2.5rem' }}/>
            </Link>
            <Link href="https://www.facebook.com/nike" color="inherit" target='_blank'>
              <Facebook sx={{ fontSize: '2.5rem' }}/>
            </Link>
            <Link href="https://www.youtube.com/user/nike" color="inherit" target='_blank'>
              <YouTube sx={{ fontSize: '2.5rem' }}/>
            </Link>
            <Link href="https://www.instagram.com/nike" color="inherit" target='_blank'>
              <Instagram sx={{ fontSize: '2.5rem' }}/>
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="left">
            {"© 2023 Nike, Inc. สงวนลิขสิทธิ์"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}