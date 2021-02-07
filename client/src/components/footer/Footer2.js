import React from 'react'
// import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import '../app.css'
// import styled from 'styled-components';




const useStyles = makeStyles((theme) => ({
  root:{
    margin:0,
    padding:0,
  },
 title:{
   fontSize: '8px',
   [theme.breakpoints.up('sm','md')]: {
    fontSize: '14px',
                                                     
  },
 },
 title3:{
  fontSize: '12px',
  fontWeight: 'bold',
  [theme.breakpoints.up('sm','md')]: {
    fontSize: '18px',
                                                     
  },
},
title4:{
  fontSize: '10px',
  fontWeight: 'bold',
  [theme.breakpoints.up('sm','md')]: {
    fontSize: '14px',
                                                     
  },
},
mintitle:{
  fontSize: '12px',
  fontWeight: 'none',
},
google:{
  width: '48px',
  height: '30px',
  margin: 4,
  [theme.breakpoints.up('sm','md')]: {
    width: '75px',
    height: '34px',
                                                     
  },
},
social:{
  width:'25px',
  height:'30px',
  margin:2,

},
mainSocial:{
  textAlign:'center',
 
},
foot1:{
  boxShadow:'10px 10px 10px 0 grey',
  paddingTop:10,
},
foot2:{
  marginTop:'20px',
},
// drawerHeader: {
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// },
// content: {
//   flexGrow: 8,
//   padding: theme.spacing(0, 1),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: -10,
// },
// contentShift: {
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.easeOut,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   marginLeft: 0,
// },
}));

const Footer2=()=>{
  const classes = useStyles();
  //  const [sidebar, setSidebar] = useState(false);
  
  //    const showSidebar = () => setSidebar(!sidebar);


    return (
      //      <main
      //   className={clsx(classes.content, {
      //     [classes.contentShift]: sidebar,
      //   })}
      // > 
      <footer className='foot'>
      <Grid className={classes.root} container>
        
       <Grid className={classes.foot1} container direction="row">
        
      <Grid item xs={12} sm={12} md={2}  >
      <Typography className={classes.title} variant="h4">
        #  1 hour delivery
        </Typography>
       
        </Grid>
        <Grid  item xs={12} sm={12} xl={3} md={2}>
        <Typography className={classes.title} variant="h4">
          Cash on delivery
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} xl={3} md={2}>

        <Typography className={classes.title3} variant="h4">
           0188-1234567
           </Typography>
        </Grid>
        <Grid item xs={12} sm={12} xl={3} md={3}>
        <Typography className={classes.title4} variant="h4">
        <span className={classes.mintitle}>or email:</span> support@chaldal.com
         </Typography>
         </Grid>

      <Grid item xs={12} sm={12} md={1} xl={1}>
      <Typography className={classes.title} variant="h4">
             Pay with
             </Typography>
             </Grid>
        <Grid item xs={12} sm={12} xl={3} md={2}>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Amex.png?q=low&webp=1&alpha=1'  width='25px' height='25px' alt='icon1'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/mastercard.png?q=low&webp=1&alpha=1'  width='25px' height='25px' alt='icon2'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/VIsa.png?q=low&webp=1&alpha=1' width= '25px' height='25px' alt='icon3'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/bkash.png?v=1&q=low&webp=1&alpha=1' width= '25px' height='25px' alt='icon4'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/COD.png?v=1&q=low&webp=1&alpha=1' width= '25px' height='25px' alt='icon5'/>
        </Grid>
        </Grid>
        

     <Grid className={classes.foot2} container direction="row">
   
        <Grid item xs={4} xl={3} md={4}>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title4} varient="4">
            Customer Service
            </Typography>
            </Grid>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title} varient="4">
            Contact Us
            </Typography>
        </Grid>
        <Grid xs={1}  sm={12}>
        <Typography className={classes.title} varient="4">
            FAQ
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title} varient="4">
            Additional Cost
            </Typography>
        </Grid>
        </Grid>

        <Grid xs={3} xl={3} md={3} >
        <Grid xs={1} sm={12}>
        <Typography className={classes.title4} varient="4">
            About Chaldal
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title} varient="4">
            Privacy Policy
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography className={classes.title} varient="4">
            Terms of Use
            </Typography>
        </Grid>
        </Grid>

        <Grid xs={2}xl={3} md={2} >
        <Grid xs={1} sm={12}>
        <Typography className={classes.title4} varient="4">
            For Bussiness
            </Typography>
        </Grid>
        <Grid xs={1} sm={12}>
        <Typography  className={classes.title} varient="4">
            Corporate
            </Typography>
        </Grid>
       
        </Grid>
      <Grid xs={2} xl={3} md={3} >         
      <img className={classes.google} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/google_play_store.png?q=low&webp=1&alpha=1' alt='play1'/>
      <img className={classes.google} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/app_store.png?q=low&webp=1&alpha=1' alt='play-app'/> 
      
         </Grid>
        </Grid>
        <Grid conatiner className={classes.mainSocial} sm={12} xs={12} xl={12} md={12}>
        <a href='https://www.facebook.com/'><img className={classes.social} src=' https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Facebook.png?q=low&webp=1&alpha=1' alt='fb'/></a>
      <a href='https://www.youtube.com/'> <img className={classes.social} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Youtube.png?q=low&webp=1&alpha=1' alt='youtube'/></a> 
      <a href='https://twitter.com/'> <img className={classes.social} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/twitter.png?q=low&webp=1&alpha=1' alt='twitter'/></a> 
      <a href='https://www.instagram.com/'><img className={classes.social} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Instagram.png?q=low&webp=1&alpha=1' alt='insta'/></a>
        </Grid>
 </Grid>
  </footer>

//  </main>
    )
}

export default Footer2

