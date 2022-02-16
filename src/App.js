// import logo from './logo.svg';
import  './App.scss';
import Header from './Components/header/Header';
import Hero from './Components/heroImg/Hero';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Section from './Components/section/Section';
import Footer from './Components/footer/Footer';
import { lineHeight } from '@mui/system';
const theme =  createTheme(
  {
    palette:{
      primary:{
        main: '#049296',
        
      },
      secondary:{
        main:'#313d4d',
      },
      grey:{
        main:'#f4f4f4',
      },
      // background: {
      //   default: "#f4f4f4"
      // },
      error:{
        main:'#fff',
      },
      
    },
    typography:{
      h1:{color:'#313d4d',fontFamily:'Montserrat-Bold',fontSize:'88px'},
      h2:{color:'#313d4d',fontFamily:'Montserrat-Bold',fontSize:'36px'},
      h3:{color:'#313d4d',fontFamily:'Montserrat-Bold',fontSize:'24px'},
      body1:{lineHeight:'36px' ,fontSize:'18px' ,fontFamily:'Montserrat-Medium'}
      },
     
  }
)
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
         <Header></Header>
      <Hero></Hero>
      <Section></Section>
      <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
