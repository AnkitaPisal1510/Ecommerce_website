import React from 'react';
import Link from 'next/link';
const Navbar=()=>{
    return(
        <div className='NavBar'>
        <Link href="/about" passHref legacyBehavior>
          <a>About</a>
        </Link>
  </div>
  )
}

export default Navbar;