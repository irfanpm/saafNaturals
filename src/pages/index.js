import Head from 'next/head';
import Home from 'components/Home';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import Gallery from 'components/Gallery';
import Introduction from 'components/Introduction';
import VideoIntro from 'components/VideoIntro';
import Products from 'components/product';
import Contacts from 'components/Contact';
import TeamSection from 'components/Team/TeamSection';
import ProductDetail from 'components/product/productDetails';

function Template() {
  // Static data for demonstration
  const navigation = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  const headerInfo = {
    metadata: {
      section: 'Welcome to Our Restaurant',
      title: 'Delicious Food Awaits',
      intro: 'Experience the best culinary delights.',
      picture: { imgix_url: '/images/header.jpg' },
    },
  };

  const aboutInfo = {
    metadata: {
      section: 'About Us',
      title: 'Our Story',
      about: 'We are passionate about serving delicious meals.',
      about_intro: 'Our journey began with a dream...',
      picture: { imgix_url: '/images/about.jpg' },
    },
  };

  const drinkInfo = {
    metadata: {
      title: 'Drinks',
      menu: [
        { title: 'Mojito', slug: 'mojito', price: '$5', tags: 'Minty, Refreshing' },
        { title: 'Pina Colada', slug: 'pina-colada', price: '$7', tags: 'Tropical' },
      ],
    },
  };

  const foodInfo = {
    metadata: {
      title: 'Food',
      menu: [
        { title: 'Pasta', slug: 'pasta', price: '$12', tags: 'Italian, Cheesy' },
        { title: 'Steak', slug: 'steak', price: '$20', tags: 'Grilled, Tender' },
      ],
    },
  };

  const historyInfo = {
    metadata: {
      section: 'History',
      title: 'Our Heritage',
      title_intro: 'We honor traditional recipes with a modern twist.',
    },
  };

  const galleryInfo = {
    metadata: {
      title: 'Gallery',
      intro: 'Take a look at our delicious dishes.',
      menu: [
        { title: 'Pasta', slug: 'pasta', price: '$12', picture: { imgix_url: '/images/pasta.jpg' } },
        { title: 'Steak', slug: 'steak', price: '$20', picture: { imgix_url: '/images/steak.jpg' } },
      ],
    },
  };

  const contactInfo = {
    metadata: {
      section: 'Contact Us',
      title: 'Get in Touch',
      intro: 'We would love to hear from you!',
      details: [
        { title: 'Hours', intro: 'Mon-Fri: 9am - 10pm' },
        { title: 'Location', intro: '123 Food St, Culinary City' },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Saaf Naturals</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/saafImage/coconut1.png" />
      </Head>
        <Home info={headerInfo} />
        <AboutUs info={aboutInfo} />
        <Products info={[galleryInfo, foodInfo]} />
        <Gallery info={[drinkInfo, foodInfo]} />
        <TeamSection/>

        <Contacts info={contactInfo} />

        {/* <ProductDetail/> */}

      <Layout navbar={navigation}>
        {/* <Introduction info={historyInfo} /> */}
      </Layout>
      <Footer>
        <VideoIntro url="/videos/intro.mp4" />
      </Footer>
    </>
  );
}

export default Template;
