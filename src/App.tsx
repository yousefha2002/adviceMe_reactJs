import React , {useEffect}from 'react';
import './App.css';
import cookies from "js-cookie";
import Layout from './components/layout/Layout';
import {createTheme,ThemeProvider} from '@mui/material'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import LastQustions from './pages/LastQustions';
import SingelQustion from './pages/SingelQuestion';
import CategoryQustions from './pages/CategoryQuestions';
import Footer from './components/layout/Footer';
import ProfilePage from './pages/ProfilePage';
import UpdateProfile from './pages/user/UpdateProfile';
import PostQuestion from './pages/PostQuestion';
import Experts from './pages/Experts';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    ligtGray:{
      main:string
    },
    groundBlue:{
      main:string
    }
  }

  interface Palette {
    ligtGray:{
      main:string
    },
    groundBlue:{
      main:string
    }
  }
}

const theme = createTheme({
  palette:{
    secondary:{
      contrastText:"#fff",
      main:"#1a68c1"
    },
    primary:{
      contrastText:"#fff",
      main:"#00897b"
    },
    info:{
      contrastText:'#066ac9',
      main:"#f4f5f8"
    },
    warning:{
      contrastText:'#000',
      main:"#f4f5f8"
    },
    success:{
      contrastText:'#f4f5f8',
      main:"#000"
    },
    ligtGray:{
      main:"#f3f3f3"
    },
    groundBlue:{
      main:"#066bc927"
    }
  }
})

function App() {

  useEffect(()=>{
    const lang = cookies.get('i18next') || "en";
    if(lang==="ar"){
      document.body.dir="rtl"
  }
  else{
      document.body.dir="ltr"
  }
  },[]);

  return (
    <ThemeProvider theme={theme}>
        <Layout/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/last-questions' element={<LastQustions/>}/>
          <Route path='/questions/:questionId' element={<SingelQustion/>}/>
          <Route path='/questions/category/:categoryId' element={<CategoryQustions/>}/>
          <Route path='/profile/:profileId' element={<ProfilePage/>}/>
          <Route path='update-profile' element={<UpdateProfile/>}/>
          <Route path='add-question' element={<PostQuestion/>}/>
          <Route path='experts' element={<Experts/>}/>
        </Routes>
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
