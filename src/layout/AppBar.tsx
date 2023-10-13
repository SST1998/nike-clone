import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Icon } from '@iconify/react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Autocomplete, Badge } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { GetProductType } from '../pages/ProductDetail';
import { ProductContext, ProductsType } from '../@fakeDB/products';
import { Link } from 'react-router-dom';
interface PageType {
  name: string
  path: string
}

const pages:PageType[] = [
  {
    name: 'สินค้าทั้งหมด',
    path: '/nike-clone/all-product'
  }
]

// ** Search Bar Style
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '2rem',
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  minWidth: '30vw',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '&.MuiAutocomplete-inputRoot': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
}));

// ** Img Style
const ImgStyle = styled('img')(({ theme }) => ({
  width: '100px',
  [theme.breakpoints.down('sm')]: {
    width: '50px',
  },
}));
// ** App Bar
export const NavAppBar = () => {
  // ** hook
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [autocompleteValue, setAutocompleteValue] = React.useState<string>('');
  const [openAutocomplete, setOpenAutocomplete] = React.useState<boolean>(false);
  

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const productData = React.useContext(ProductContext)

  // Count in cart
  let countCart:number = 0
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    JSON.parse(storedCart).map((item:GetProductType) => {
      countCart += item.count
    })
  }

  return (
    <ProductContext.Provider value={productData}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display:'flex', justifyContent:'space-between' }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="/nike-clone"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Icon icon="simple-icons:nike" width="50" height="50" />
            </Typography>
            
            {/* Nav Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
              {pages.map((page, index) => (
                <React.Fragment key={index}>
                  <Link to={page.path} style={{ textDecoration: 'none' }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: '#000', display: 'block',
                        '&:hover': {
                          bgcolor: '#ccc'
                        }
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                </React.Fragment>
              ))}
            </Box>

            {/* Search */}
            <Search sx={{ flexGrow: { xs: 1, md: 0 } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <Autocomplete
                freeSolo={false}
                popupIcon={""}
                options={productData}
                getOptionLabel={(option:ProductsType) => option.name}
                renderOption={(props, option: ProductsType) => {
                  return(
                    <li {...props} key={option.id}>
                      <Link to ='/nike-clone'>
                        <Box sx={{color: '#000', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <ImgStyle src={option.img}/>
                        <Typography variant='subtitle1' sx={{ ml:2 }}>{option.name}</Typography>
                        </Box>
                      </Link>
                    </li>
                  )
                }}
                open={openAutocomplete}
                onKeyDown={() => {
                  setOpenAutocomplete(true)
                }}
                onClose={() => setOpenAutocomplete(false)}
                inputValue={autocompleteValue}
                onInputChange={(event, newInputValue) => {
                  setAutocompleteValue(newInputValue);
                }}
                onChange={(event, newValue) => {
                  console.log('Selected Value:', newValue);
                }}
                sx={{ px: 2 }}
                renderInput={(params) => {
                  const {InputLabelProps,InputProps,...rest} = params;
                  return (
                    <StyledInputBase
                      {...params.InputProps} {...rest}
                      placeholder="ค้นหา"
                      value={autocompleteValue}
                      onChange={(event) => {
                        setAutocompleteValue(event.target.value)
                      }}
                    />
                  )
                }}
              />
            </Search>

            {/* Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Bag */}
            <Box>
              <Link to={`/nike-clone/cart`} style={{ textDecoration: 'none' }}>
                <IconButton>
                  <Badge badgeContent={countCart}
                    sx={{ 
                      '&.MuiBadge-root span': {
                        color: '#fff',
                        bgcolor: '#000'
                      }
                    }}
                  >
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ProductContext.Provider>
  );
}