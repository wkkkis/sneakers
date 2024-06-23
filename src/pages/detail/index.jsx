import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Cart, Navbar, DetailHero } from '../../components/index.js';
import { heroapi, popularsales, toprateslaes } from '../../data/data.js';

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

    if (params.id) {
      const shoesArr = [...popularsales.items, ...toprateslaes.items];
      const sneaker = shoesArr?.find((item) => item.id === params.id);

      if (sneaker) {
        setData(sneaker);
      } else {
        navigate('/');
      }
    }
  }, [])

  return (
    <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative h-[120vh]'>
        <DetailHero {...data} />
      </main>
    </>
  )
};

export default Detail;