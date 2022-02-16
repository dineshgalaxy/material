import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerBtn:{
    borderTopLeftRadius:'21px',
    borderBottomRightRadius:'21px',
    transform:'skew(-9deg,0deg)',
    paddingLeft:'40px',
    paddingRight:'40px',
    paddingTop:'12px',
    paddingBottom:'12px',
    borderColor:theme.palette.error.main,
    borderWidth:'3px',
    color:'white',
    '&':{
    [theme.breakpoints.down('md')]: {
      paddingLeft:'25px',
    paddingRight:'25px',
    paddingTop:'12px',
    paddingBottom:'12px',
    }}

  },
  btn:{
    borderTopLeftRadius:'21px',
    borderBottomRightRadius:'21px',
    transform:'skew(-9deg,0deg)',
    paddingLeft:'40px',
    paddingRight:'40px',
    paddingTop:'12px',
    paddingBottom:'12px',
    borderColor:theme.palette.primary.main,
    borderWidth:'3px',
    marginTop:'20px'
  },
    humburgur: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
          display:'none'
        },
    },
    menu:{
      [theme.breakpoints.down('sm')]:{
        display:'none',
      },
      // [theme.breakpoints.down('lg')]:{
      //   paddingRight:'20px'
      //  },
      '& div':{
        [theme.breakpoints.down('md')]:{
         paddingRight:'20px',
         fontSize:'15px'
        }
      }
    },
    h1:{
      [theme.breakpoints.down('xs')]:{
        fontSize:'50px'
      }
    }
}));

export default useStyles;

