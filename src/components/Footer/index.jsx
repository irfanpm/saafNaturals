import React from 'react';
import SocialMedia from 'components/Contact/SocialMedia'; // Reusing from Contacts
import styles from './styles.module.scss';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Products', path: '#products' },
    { name: 'Contact', path: '#contact' },
  ];

  const contactInfo = {
    email: 'saafnaturals@gmail.com',
    phone: '8111935267',
    address: 'Thrissur, guruvayoor, Pincode : 680520',
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.full_background}></div>
      <div className={styles.footer_container}>
        <div className={styles.footer_column}>
          <h3 className={styles.column_title}>Quick Links</h3>
          <ul className={styles.link_list}>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path} className={styles.footer_link}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer_column}>
          <h3 className={styles.column_title}>Contact Info</h3>
          <ul className={styles.contact_list}>
            <li>Email: <a href={`mailto:${contactInfo.email}`} className={styles.footer_link}>{contactInfo.email}</a></li>
            <li>Phone: <a href={`tel:${contactInfo.phone}`} className={styles.footer_link}>{contactInfo.phone}</a></li>
            <li>Address: <span>{contactInfo.address}</span></li>
          </ul>
        </div>

        <div className={styles.footer_column}>
          <h3 className={styles.column_title}>Follow Us</h3>
          <div className={styles.social_media}>
            <SocialMedia />
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>&copy; {new Date().getFullYear()} Saaf Naturals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;