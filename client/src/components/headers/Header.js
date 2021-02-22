import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
// import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Icon } from 'react-icons-kit'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { IconContext } from 'react-icons/lib';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Drawer from '@material-ui/core/Drawer';
import egg from './icon/egg1.png'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Filters from '../subcom/Filters'
import Footer2 from '../footer/Footer2'
import MainPages from '../mainpages/Pages'
import {
  // Modal,
  // MaterialInput,
  // MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert'
// import { useTranslation } from 'react-i18next';
import {menu} from 'react-icons-kit/iconic/menu'
// import {menu} from 'react-icons-kit/entypo/menu'
// import i18next from 'i18next';
import Rightsidebar from '../RightCartbar/Rightsidebar'
import BottomAppBar from './bottomheader/BottomAppBar'
import SigninModal from '../mainpages/auth/SigninModal'
import MobileModal from './modal/MobileModal'

const Nav = styled.div`
  background: #ffc40c;
  height: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1.5rem;
  font-size: 1.5rem;
  height: 25px;
  display: flex;
  color: #4c4c4c;
  justify-content: flex-start;
  align-items: center;
`;


const SidebarNav = styled.nav`
  background: white;
  height: 100%;
  border-right: 1px solid grey;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  position: absolute;
  top: 54px;
  left: ${({ sidebar }) => (sidebar ? 'fixed' :  '-100%')};
  transition: 350ms;
  transition: 0.5s ease-in;
  z-index: 10;
  padding: 0 19px;
  position: ${({ sidebar }) => (sidebar ? 'fixed' :  '-100%')};  
  @media (max-width: 760px) {
    left: ${({ sidebar }) => (sidebar ? '-80%' :  '-1%')};

  }
  @media (max-width: 554px) {
    left: ${({ sidebar }) => (sidebar ? '-90%' :  '-1%')};

  }
`
;

const SidebarWrap = styled.div`
  width: 100%;
  position:sticky;  

`;
// const drawerWidth = 180;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  root2: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    // width: 400,
    marginLeft:'20px',
    marginRight:'8px',
  
  },
  title1:{
    fontFamily: 'Satisfy, cursive',
    textDecoraction: 'none',
    fontSize: '29px',
    // marginRight:'20px',
    fontWeight: '600',
    display: 'none',
    color:'#191919',
    opacity:'0.8',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
                                                       
    },
  },
  Link:{
    // fontFamily: 'Satisfy, cursive',
    textDecoraction: 'none',
    fontSize: '29px',
    // marginRight:'20px',
    fontWeight: '600',
    display: 'none',
    color:'#191919',
    opacity:'0.8',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
                                                       
    },
  },
  egg:{
    display: 'none',
    // marginLeft:25,
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
  },
  title2:{
    display: 'none',
    //  marginBottom: '19px',
    color:'#4c4c4c',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
  },
  title3:{
    display: 'none',
    color:'#4c4c4c',
    // marginBottom: '19px',
    fontSize: '16px',
    taxtAlign:'center',
    cursor: 'pointer',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
  },
  title4:{
    display: 'none',
    color:'whitesmoke',
    fontSize: '16px',
    cursor: 'pointer',
    taxtAlign:'center',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
  },

  input: {
    marginLeft: theme.spacing(2),
    width: '100ch',
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
  },
  iconButton: {
    padding: 6,
  },
  divider: { 
    display:'none',
    height: 58,
    margin: 0,
    [theme.breakpoints.up('sm','md')]: {
      display: 'block',
                                                       
    },
   
  },
  divider1: {
    height: 18,
    backgroundColor:'black',
    margin: 4,
   
  },
  drawerHeader: {
    display: 'flex',
    // alignItems: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0,0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 250,
                                                       
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    

  },
  mobile:{
    display: 'none',

    [theme.breakpoints.up('sm','md')]: {
      display: 'none',

  },
}
}));

function Header({user,name}) {
  // const { t } = useTranslation();

  // function handleClick(lang) {
  //   i18next.changeLanguage(lang)
  // }
  // const [sort, setSort] = state.productsAPI.sort



    const classes = useStyles();
    const state = useContext(GlobalState)
    // const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    // const [cart] = state.userAPI.cart
    // const [menu, setMenu] = useState(false)
    const [search, setSearch] = state.productsAPI.search
    const [ setCategory] = state.productsAPI.category


    // const [, setAuth] = React.useState(true);
    // const [ setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);

 
    // const handleChange = (event) => {
    //   setAuth(event.target.checked);
    // };
  
    // const handleMenu = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
  


    // const handleCategory = e => {
    //     setCategory(e.target.value)
    //     setSearch('')
    // }
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => 
    setSidebar(!sidebar);
  

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                       <DropdownMenu
        menus={[
  
          { label: "Create Product", href: "/create_product", icon: null, isAdmin:adminRouter },  
        ]}
      />
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
               <DropdownMenu
        menu={<a className="fullName">user name</a>}
        menus={[
          { label: "My Profile", href: "", icon: null },
        
          {
            label: "History",
            href: `/history`,
            icon: null,
          },
         
          { label: "Logout", href: "", icon: null, onClick:logoutUser },
          // { label: "Create Product", href: "/create_product", icon: null, isAdmin:adminRouter },  
      
        ]}
      />
            </>
        )
    }


    // const styleMenu = {
    
     
    //      display: menu ? 0 : 'close'
        
      
       
    // }

    return (
        <>
        <IconContext.Provider value={{ color: 'black' }}>
        <Grid>
        <AppBar position="fixed" color="#ee496a">
        <Nav>
          <Grid xs={1} md={1} lg={1}>
          <NavIcon to='#'>
         <Icon icon={menu} size={28} alt="" width="30" onClick={showSidebar} /> 
          </NavIcon>
          </Grid>
          <Grid xs={0} md={0} lg={0}>
         
          <img className={classes.egg} src={egg} alt='egg' width='37px'/>
         
          </Grid>
          <Grid xs={2} md={2} lg={2}>
          <Typography className={classes.title1}  variant="h4">
          <Link to="/">{isAdmin ? 'Admin' : '  Chaldal '}</Link>
             
            </Typography>
            </Grid>
            <Grid xs={8} sm={9} md={8} lg={8} xl={8}>
          <Paper component="form" className={classes.root2}>
          {/* <input type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} /> */}
      <InputBase
        className={classes.input}
        value={search}
        placeholder="Search for products(e.g, egg, milk, potato"
        onChange={e => setSearch(e.target.value.toLowerCase())}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon /> 
      </IconButton>
         </Paper>
         </Grid>
         <Divider className={classes.divider} orientation="vertical" />
         <div className="menu"
          // onClick={() => setMenu(!menu)}
          >
                <MobileModal/>
            </div>
         {/* <div className='azab' style={styleMenu}> */}
         <Grid xs={3}  md={3} xl={3} lg={3}>
         <div className="help">
         <Typography className={classes.title2} variant="h6">
         <IoIcons.IoMdHelpCircle  className={classes.markicon}/>
         Help & More

         
            </Typography>
            </div>
            </Grid>
            <Divider className={classes.divider} orientation="vertical" />
            <Grid xs={2} md={2} lg={2} xl={3}>
          <div className='lang'>
          <Typography className={classes.title3} variant="h6">
             <span className='eng'  > EN </span> | <span> বাং</span> 
             
            </Typography>
            </div>
            </Grid>
            <Divider className={classes.divider} orientation="vertical" />
            <Grid xs={3} md={3} xl={3}>
          <div className="div-signin">
          {isAdmin && adminRouter()}
          <SigninModal/>
          {/* {
                     isLogged ? loggedRouter() :<Link to="/login">{isAdmin ? 'Admin' : <SigninModal/> }</Link>
                } */}

            </div>
          </Grid>
          {/* </div> */}
        </Nav>
        </AppBar>
        </Grid>
              <SidebarNav sidebar={!sidebar} position='permanent'  variant="persistent" > 
              <SidebarWrap>
            
                <NavIcon position='permanent'  variant="permanent" to='#' onClick={showSidebar}>
                </NavIcon>
          <Filters/>
               
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
          <main
          className={clsx(classes.content, {
            [classes.contentShift]: sidebar,
          })}
        >
  
  
  
  
          <div className={classes.drawerHeader} />
          <Typography paragraph>
          {/* <Rghtsidebar /> */}
          {/* <Rightsidebar/>
         <Products/>  */}
         <Rightsidebar/>
         {/* <h3>{t('Thanks')}</h3>  <h3>{t('ttt')}</h3>  */}
         <MainPages />
         </Typography>
         <Footer2/>
   
       
        </main>
        <BottomAppBar/>
        </>
        /* // <header>
        //     <div className="menu" onClick={() => setMenu(!menu)}>
        //         <img src={Menu} alt="" width="30" />
        //     </div>

        //     <div className="logo">
        //         <h1>
        //             <Link to="/">{isAdmin ? 'Admin' : 'DevAT Shop'}</Link>
        //         </h1>
        //     </div>

        //     <ul style={styleMenu}>
        //         <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

        //         {isAdmin && adminRouter()}

        //         { */
        /* //             isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
        //         }

        //         <li onClick={() => setMenu(!menu)}>
        //             <img src={Close} alt="" width="30" className="menu" />
        //         </li>

        //     </ul> */

            
        //         isAdmin ? '' 
        //         :<div className="cart-icon">
        //             <span>{cart.length}</span>
        //             <Link to="/cart">
        //                 <img src={Cart} alt="" width="30" />
        //             </Link>
        //         </div>
        //     }
            
        // </header>
    )
}

export default Header
