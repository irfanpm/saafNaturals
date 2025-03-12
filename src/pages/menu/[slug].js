import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import Footer from 'components/Footer';
import Contacts from 'components/Contact';
import MenuIntro from 'components/MenuIntro';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/product';

function Menu() {
  const {
    query: { slug },
  } = useRouter();

  // Static data for demonstration
  const navigation = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'Contact', link: '/contact' },
  ];

  const foodInfo = {
    metadata: {
      title: 'Our Delicious Food',
      section: 'Food Menu',
      menu: [
        { title: 'Pizza', slug: 'pizza', price: '$10', tags: 'Cheesy, Hot' },
        { title: 'Burger', slug: 'burger', price: '$8', tags: 'Juicy, Grilled' },
      ],
    },
  };

  const drinkInfo = {
    metadata: {
      title: 'Refreshing Drinks',
      section: 'Drink Menu',
      menu: [
        { title: 'Coke', slug: 'coke', price: '$2', tags: 'Soda' },
        { title: 'Lemonade', slug: 'lemonade', price: '$3', tags: 'Citrusy' },
      ],
    },
  };

  const galleryInfo = {
    metadata: {
      title: 'Gallery',
      intro: 'Check out our amazing dishes!',
      menu: [
        { title: 'Pizza', slug: 'pizza', price: '$10', picture: { imgix_url: '/images/pizza.jpg' } },
        { title: 'Burger', slug: 'burger', price: '$8', picture: { imgix_url: '/images/burger.jpg' } },
      ],
    },
  };

  const contactInfo = {
    metadata: {
      section: 'Get in Touch',
      title: 'Contact Us',
      intro: 'We would love to hear from you!',
      details: [
        { title: 'Hours', intro: 'Mon-Fri: 9am - 10pm' },
        { title: 'Location', intro: '123 Restaurant St, Food City' },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Next.js Restaurant CMS</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Gallery info={[galleryInfo, foodInfo]} />
      <Layout navbar={navigation}>
        <MenuIntro info={[foodInfo, drinkInfo]} slug={slug} />
      </Layout>
      <Footer>
        <VideoIntro url="/videos/intro.mp4" />
        <Contacts info={contactInfo} />
      </Footer>
    </>
  );
}

export default Menu;
