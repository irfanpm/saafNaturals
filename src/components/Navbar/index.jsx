import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from 'constants/images'; // Import your images

import styles from './styles.module.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  // Static navbar items
  const navbarItems = ['Home', 'About', 'Product', 'Gallery', 'Owner','Contact'];
  const logoUrl = ''; // Static logo image

  const handleToggle = () => {
    setToggleMenu(prev => !prev);
  };
  
  return (
    <nav className={styles.navbar_container} id='navigation'>
      <Link href='/#home' passHref>
        <div className={styles.navbar_logo}>
          {/* <Image
            src={logoUrl}
            layout='fill'
            objectFit='cover'
            alt='logo' /> */}
        </div>
      </Link>
      <ul className={styles.navbar_links}>
        {navbarItems.map((item, index) => (
          <li className={cn(styles.menu_item, 'opensans')} key={index}>
            <Link href={`/#${item.toLowerCase()}`} passHref>
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.navbar_login}>
      
      </div>
      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu className={styles.navbar_hamburger} onClick={handleToggle} />
        {toggleMenu && (
          <div className={cn(styles.navbar_smallscreen_overlay, 'slide_bottom', 'flex_center')}>
            <MdOutlineRestaurantMenu className={styles.overlay_close} onClick={handleToggle} />
            <ul className={styles.navbar_smallscreen_links}>
              {navbarItems.map((item, index) => (
                <li onClick={handleToggle} key={index}>
                  <Link href={`/#${item.toLowerCase()}`} passHref>
                    <a>{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
