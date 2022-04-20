import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle'
import ProfileTitle from '../../headings/ProfileTitle.jsx';
import Footer from '../../footer/footer.jsx';
import '../../footer/footer.scss';
import './insyderPage.scss';
import '../../headings/headings.scss';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { db } from "../../../firebase-config.js";
import { getStorage, ref, getDownloadUrl, getDownloadURL } from "firebase/storage";
import circle1 from '../../../images/circle1.svg';
import circle2 from '../../../images/circle4.svg';
import circle3 from '../../../images/circle3.svg';
import circle4 from '../../../images/circle2.svg';
import InsyderOverlay from "../../insyderOverlay/index.jsx";


function Insyderpage(props) {

  useDocumentTitle('SYDE \'26 | Insyder');

  const [url, setUrl] = React.useState();


  const [memeIndex, setMemeIndex] = useState(1);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  function toggleInsyderOverlay() {
    props.setShowInsyderOverlay(prev => !prev)

  }

  React.useEffect(() => {
    function watchWidth() {
      console.log("Setting up...")
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    toggleInsyderOverlay()


    return function () {
  
      window.removeEventListener("resize", watchWidth)
    }

   
  }, [])

  return (
    <div className="insyderPage">
 
      {/* <h2 className = "insyder--title">Insyder Page</h2> */}
      <ProfileTitle title="Insyder Page"/>

      <a className = "insyder--title">Click on each image to read a story behind it!</a>
      <br></br>
      <br></br>
     
 
      <div className="insyder--box">
        <Box sx={{
          width: 850,
        }} className="box">
       
          <ImageList variant="masonry" cols={windowWidth > 1000
            ? 3 : windowWidth > 650 ? 2 : 1} gap={8} className="image-list">
         
            <img src={circle1} className="circle1IP" alt="Circles" />
            <img src={circle2} className="circle2IP" alt="Circles" />
            <img src={circle3} className="circle3IP" alt="Circles" />
            <img src={circle4} className="circle4IP" alt="Circles" />
            {itemData.map((item) => (
            
              <ImageListItem key={item.id} className="image-list-item">
         
                <img
                  src=
                  {`${item.img}?w=${windowWidth > 600
                    ? 33 : windowWidth < 375 ? 148 : 48}&fit=crop&auto=format`}
              
                  srcSet={`${item.img}?w=${windowWidth > 600
                    ? 248 : windowWidth < 375 ? 148 : 48}&fit=crop&auto=format&dpr=2 2x`}
                  alt=''
                  loading="lazy"
                />
           
                <div className = "insyderImageOverlay"> <a className="textOnTop">{item.title}</a></div>
              </ImageListItem>
       
            ))}
          </ImageList>
   
        </Box>
      </div>
      <div>
    
        <Footer />
      </div>
    </div>
  );
}

export default Insyderpage;

const itemData = [
  {
    img: '../insyderMemes/3BE41539-0698-45B5-B8CD-CDDDF21A1FDD - Roselyn H.jpeg',
    title: 'Mhmm Ontario slush',
    id: 2,
  },
  {
    img: '../insyderMemes/3DD00D70-D181-4209-A45A-14D536AC0A46 - Roselyn H.jpeg',
    title: 'The only 101 class people attended',
    id: 3,
  },
  {
    img: '../insyderMemes/5C174B00-A04E-453F-AC68-4CB9D23F2927 - Shushawn Saha.jpeg',
    title: 'No comment - Shushawn',
    id: 4,
  },
  {
    img: '../insyderMemes/5CD0E0B7-96E9-4542-86A0-EBD75827F52D - Aditi Sandhu.jpeg',
    title: '🎉🎉🎉',
    id: 5,
  },
  {
    img: '../insyderMemes/8BACA803-9FCE-4B0D-B478-B42DC178F470 - Shushawn Saha.jpeg',
    title: 'What type of heart is that?',
    id: 6,
  },
  {
    img: '../insyderMemes/09C57416-C355-452F-AA20-AAF06003DB7C - Serena Li.jpeg',
    title: 'Girlboss',
    id: 7,
  },
  {
    img: '../insyderMemes/31D49F0D-EF68-4343-BA46-92638BD03A84 - Kelly Pham.jpeg',
    title: '🛗👟',
    id: 8,
  },
  {
    img: '../insyderMemes/39A52E27-B829-426F-9357-3A87898C897A - Serena Li.jpeg',
    title: 'What Jada meant by an entanglement',
    id: 9,
  },
  {
    img: '../insyderMemes/0BD82D18-F2BB-440F-9FF2-C3EE7ECD3FA1 - Shushawn Saha.jpeg',
    title: 'For the record, I was trying to waterfall from a brita and it spilled - Shushawn',
    id: 1,
  },
  {
    img: '../insyderMemes/34BF3F32-C850-410F-912A-D1B344982C11 - Shushawn Saha.jpeg',
    title: 'Good skin ⬆️',
    id: 10,
  },
  {
    img: '../insyderMemes/40D24635-330F-439F-BB96-D157515E0A86 - Shushawn Saha.jpeg',
    title: 'Hey! Let’s use our lego low-fidelity prototype to measure turning radius as that is going to help in a production version :) ',
    id: 11,
  },
  {
    img: '../insyderMemes/74BA30A0-9B2A-4B75-89BF-0C9825196EAE - Shushawn Saha.jpeg',
    title: 'Benjamin Robert David Chung',
    id: 12,
  },
  {
    img: '../insyderMemes/189BC681-1494-4A4D-B66D-9F62763C6C3B - Shushawn Saha.jpeg',
    title: '*put a mickey mouse/cartoon emoji*',
  },
  {
    img: '../insyderMemes/3344A006-5A67-4CCA-883F-7A19A5FE48DF - Shushawn Saha.jpeg',
    title: '101L phone thingy',
  },
  {
    img: '../insyderMemes/409693E2-3C9F-44EC-BC11-C0B96063C4D6 - Shushawn Saha.jpeg',
    title: 'Josh and Deen got even closer at the hotel - S',
  },
  {
    img: '../insyderMemes/14664094-8E61-4A10-BC1D-42BB5FC14756 - Shushawn Saha.jpeg',
    title: 'when you message the wrong group chart … - s',
  },
  {
    img: '../insyderMemes/A3AABD92-45D9-4471-94FB-7A242BCE05D1 - Shushawn Saha.jpeg',
    title: 'Seungwoo got the cracked girl vibes - S',
  },
  {
    img: '../insyderMemes/AFE32FDF-E064-43DC-87EC-59103C5A8B02 - Shushawn Saha.jpeg',
    title: 'take your shoes off!!!! - s',
  },
  {
    img: '../insyderMemes/C0249AAA-A903-4A5B-8660-ED7DD1175E7B - Serena Li.jpeg',
    title: 'Monday morning physics be like',
  },
  {
    img: '../insyderMemes/C867D3A9-05A2-4EEB-9F48-4040C3014DE3 - Shushawn Saha.jpeg',
    title: 'rev. 23 years of age - s',
  },
  {
    img: '../insyderMemes/CE7559F1-FDCB-4934-BA1E-FDBD784742FC - Shushawn Saha.jpeg',
    title: 'when I realized that I’ve been lied to all along (impossible 101L test question - well I guess not really impossible) - s',
  },
  {
    //
    img: '../insyderMemes/DA96C41A-12CB-4150-A806-58B3462E405A - Shushawn Saha.jpeg',
    title: 'Lil Dicky - S',
  },
  {
    img: '../insyderMemes/DC6BE4A8-0878-4D5B-A0BC-6B91DBBAF57B - Shushawn Saha.jpeg',
    title: 'Alcoholic Deen - S',
  },
  {
    img: '../insyderMemes/E748DCE8-7166-42A5-BDE1-EA8B054DAD40 - Shushawn Saha.jpeg',
    title: 'Who even are these people - S',
  },
  {
    img: '../insyderMemes/FB5B428B-6512-4223-A60F-87DC27BCC0F4 - Shushawn Saha.jpeg',
    title: 'First day of class alarm clock - S',
  },
  {
    img: '../insyderMemes/IMG_2658 - Ananya Jaikumar.JPG',
    title: 'CMH students try not to pull fire alarm in the morning challenge (IMPOSSIBLE)',
  },
  {
    img: '../insyderMemes/IMG_7575 - boya zhang.PNG',
    title: '✌️✌️✌️',
  },
  {
    img: '../insyderMemes/IMG_8566 - boya zhang.jpg',
    title: `Dean's list!!`,
  },
  {
    img: '../insyderMemes/kate - Matthew Ng.jpg',
    title: 'Kate, a series in three parts (1/3)',
  },
  {
    img: '../insyderMemes/kate banana - Matthew Ng.jpg',
    title: 'Kate 🍌 (2/3)',
  },
  {
    img: '../insyderMemes/kate cake - Matthew Ng.jpg',
    title: 'Kate 🎂 (3/3)',
  },
  {
    img: '../insyderMemes/physics - Hargun Sibal.jpg',
    title: 'Just imagine...',
  },
  {
    img: '../insyderMemes/PXL_20211102_222822982.PORTRAIT - Hargun Sibal.jpg',
    title: 'TsTsians roll out',
  },
  {
    img: '../insyderMemes/rosie red - Matthew Ng.jpg',
    title: 'Rosy Rosie',
  },
  {
    img: '../insyderMemes/Snapchat-1537388837 - Hargun Sibal.jpg',
    title: 'Marggy Choggy',
  }
  ,
  {
    img: '../insyderMemes/IMG_3418.jpg',
    title: 'When the lunch lady blessed up - S',
  },
  {
    img: '../insyderMemes/syde 161 starter pack.jpeg',
    // title: 'Matty B',
  },
  {
    img: '../insyderMemes/IMG_4818.jpg',
    title: 'Most likely to miss an interview: Benjamin Robert David Chung',
  },
  
  {
    img: '../insyderMemes/302650CD-EF2E-4362-AFA1-4984091CCF8E.jpg',
    title: 'Most goofy: Deen Parak',
  },
  
  {
    img: '../insyderMemes/023BB0E3-744D-48A2-9B65-A278B120C5FA_Original.jpg',
    title: 'Most likely to spend all their money on food: Anna Yang',
  },
  
  {
    img: '../insyderMemes/2F3A7CD0-CEF4-4A56-9768-AFADF20785D3.jpg',
    title: 'Most likely to clap when the plane lands: Logan Long',
  },
  {
    img: '../insyderMemes/squydegamewinners.jpg',
    title: 'Squyde game winners: Jinal and Kelly!',
  },
  {
    img: '../insyderMemes/syde 101 starter pack.jpeg'
  },
  {
    img: '../insyderMemes/syde 111 starter pack.jpeg'
  },
  {
    img: '../insyderMemes/syde 113 starter pack.jpeg'
  },
  {
    img: '../insyderMemes/syde 121 starter pack.jpeg'
  },
];
