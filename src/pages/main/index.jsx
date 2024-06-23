import React from 'react'

import { Cart, FlexContent, Hero, Navbar, Sales } from '../../components/index.js';
import { heroapi, popularsales, toprateslaes, highlight, sneaker } from '../../data/data.js';

const Main = () => {
  return (
    <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
   </>
  )
}

export default Main