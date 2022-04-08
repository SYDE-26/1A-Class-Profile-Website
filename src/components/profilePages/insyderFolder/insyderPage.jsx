import React from 'react'; 
import ProfileTitle from '../../headings/ProfileTitle.jsx';
import Footer from '../../footer/footer.jsx';
import '../../footer/footer.scss';
import './insyderPage.scss';
import '../../headings/headings.scss';
// import { ImageList,ImageListeItem }from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {db} from "../../../firebase-config.js";
// import { initializeApp } from "firebase/app";
import {getStorage, ref, getDownloadUrl, getDownloadURL } from "firebase/storage";


function Insyderpage() {

  const [url, setUrl] = React.useState();

  React.useEffect(() => {
    const func = async() =>{
      const storage = getStorage();
      const reference = ref(storage, '/img1.jpeg');
      await getDownloadURL(reference).then((x) => {
        setUrl(x);
      })
    }
    func();
  }, []);

    return (
        <div>
            <ProfileTitle title = "Insyder Page"/>
            <div className = "insyder">
            <Box sx={{ 
              width: 850, 
              height: 4000, 
              overflowY: 'scroll' }} className = "box">
                <img src = {url} style = {{width: '33%'}}/>
      <ImageList variant="masonry" cols={ 3} gap={8} className = "image-list">
        {/* <img ></img> */}
        {itemData.map((item) => (
          <ImageListItem key={item.img} className = "image-list-item">
            <img
              src=
              {`${item.img}?w=248&fit=crop&auto=format`}
              // {`${url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt=''
              loading="lazy"
            />
            <a style = {{display: 'none'}}>{item.title}</a>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
    <div>
            {/* <NavArrows navBack="highschool" navForward="coop" /> */}
            <Footer />
        </div>
        </div>
    );
}

export default Insyderpage;

const itemData = [
    {
      img: '../insyderMemes/0BD82D18-F2BB-440F-9FF2-C3EE7ECD3FA1 - Shushawn Saha.jpeg',
      title: 'Bed',
    },
    {
      img: '../insyderMemes/3BE41539-0698-45B5-B8CD-CDDDF21A1FDD - Roselyn H.jpeg',
      title: 'Books',
    },
    {
      img: '../insyderMemes/3DD00D70-D181-4209-A45A-14D536AC0A46 - Roselyn H.jpeg',
      title: 'Sink',
    },
    {
      img: '../insyderMemes/5C174B00-A04E-453F-AC68-4CB9D23F2927 - Shushawn Saha.jpeg',
      title: 'Kitchen',
    },
    {
      img: '../insyderMemes/5CD0E0B7-96E9-4542-86A0-EBD75827F52D - Aditi Sandhu.jpeg',
      title: 'Blinds',
    },
    {
      img: '../insyderMemes/8BACA803-9FCE-4B0D-B478-B42DC178F470 - Shushawn Saha.jpeg',
      title: 'Chairs',
    },
    {
      img: '../insyderMemes/09C57416-C355-452F-AA20-AAF06003DB7C - Serena Li.jpeg',
      title: 'Laptop',
    },
    {
      img: '../insyderMemes/31D49F0D-EF68-4343-BA46-92638BD03A84 - Kelly Pham.jpeg',
      title: 'Doors',
    },
    {
      img: '../insyderMemes/39A52E27-B829-426F-9357-3A87898C897A - Serena Li.jpeg',
      title: 'Coffee',
    },
    {
      img: '../insyderMemes/34BF3F32-C850-410F-912A-D1B344982C11 - Shushawn Saha.jpeg',
      title: 'Storage',
    },
    {
      img: '../insyderMemes/40D24635-330F-439F-BB96-D157515E0A86 - Shushawn Saha.jpeg',
      title: 'Candle',
    },
    {
      img: '../insyderMemes/74BA30A0-9B2A-4B75-89BF-0C9825196EAE - Shushawn Saha.jpeg',
      title: 'Coffee table',
    },
    {
        img: '../insyderMemes/189BC681-1494-4A4D-B66D-9F62763C6C3B - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/3344A006-5A67-4CCA-883F-7A19A5FE48DF - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/409693E2-3C9F-44EC-BC11-C0B96063C4D6 - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/14664094-8E61-4A10-BC1D-42BB5FC14756 - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/A3AABD92-45D9-4471-94FB-7A242BCE05D1 - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/AFE32FDF-E064-43DC-87EC-59103C5A8B02 - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/C0249AAA-A903-4A5B-8660-ED7DD1175E7B - Serena Li.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/C867D3A9-05A2-4EEB-9F48-4040C3014DE3 - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/CE7559F1-FDCB-4934-BA1E-FDBD784742FC - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        //
        img: '../insyderMemes/DA96C41A-12CB-4150-A806-58B3462E405A - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/DC6BE4A8-0878-4D5B-A0BC-6B91DBBAF57B - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/E748DCE8-7166-42A5-BDE1-EA8B054DAD40 - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/F217B6A7-D600-4C1D-999A-BAAA39CE3E15 - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/FB5B428B-6512-4223-A60F-87DC27BCC0F4 - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/IMG_2658 - Ananya Jaikumar.JPG',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/IMG_7575 - boya zhang.PNG',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/IMG_8566 - boya zhang.jpg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/kate - Matthew Ng.jpg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/kate banana - Matthew Ng.jpg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/kate cake - Matthew Ng.jpg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/physics - Hargun Sibal.jpg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/PXL_20211102_222822982.PORTRAIT - Hargun Sibal.jpg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/rosie red - Matthew Ng.jpg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/Snapchat-1537388837 - Hargun Sibal.jpg',
        title: 'Coffee table',
      },
  ];
  