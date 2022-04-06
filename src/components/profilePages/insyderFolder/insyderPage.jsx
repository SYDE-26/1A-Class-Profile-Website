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

// function srcset(image: string, size: number, rows = 1, cols = 1) {
//     return {
//       src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//       srcSet: `${image}?w=${size * cols}&h=${
//         size * rows
//       }&fit=crop&auto=format&dpr=2 2x`,
//     };
//   }
  

function Insyderpage() {
    return (
        <div>
            {/* <h1>Test</h1> */}
            <ProfileTitle title = "Insyder Page"/>
            {/* <Footer /> */}
            <Box sx={{ width: 900, height: 5000, overflowY: 'scroll' }} className = "box">
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt=''
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
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
        img: '../insyderMemes/74BA30A0-9B2A-4B75-89BF-0C9825196EAE - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/74BA30A0-9B2A-4B75-89BF-0C9825196EAE - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/74BA30A0-9B2A-4B75-89BF-0C9825196EAE - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/74BA30A0-9B2A-4B75-89BF-0C9825196EAE - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
      {
        img: '../insyderMemes/74BA30A0-9B2A-4B75-89BF-0C9825196EAE - Shushawn Saha.jpeg',
        title: 'Coffee table',
      },
  ];
  