import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import SocialMedia from 'components/Contact/SocialMedia';
import styles from './styles.module.scss';

const Contacts = () => {
  const sectionTitle = 'Get in Touch';
  const mainTitle = 'Contact Us';
  const introText = "We'd love to hear from you!";
  const contactHoursTitle = 'Contact Hours';
  const contactHoursInfo = 'Mon-Fri: 9 AM - 5 PM';
  const socialTitle = 'Follow Us';

  // Google Maps Embed URL
  // Replace the 'q' parameter with your business address or coordinates
  const googleMapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.3699514448567!2d76.0328724!3d10.628340800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba795af2ee4684f%3A0xa66dac3cf58dc0a4!2sSAAFNATURAL!5e0!3m2!1sen!2sin!4v1747979415632!5m2!1sen!2sin';

  return (
    <section className={cn(styles.contact_section, 'section_padding')} id="contact">
      <div className={styles.full_background}></div>
      <div className={cn('app_container', 'app_wrapper')}>
        <div className={styles.contact_info}>
          <SubHeading title={sectionTitle} />
          <h1 className={cn('headtext_cormorant', styles.main_title)}>{mainTitle}</h1>

          <div className={styles.contact_details}>
            <p className="opensans">{introText}</p>
            <p className="opensans">Feel free to reach out for any inquiries.</p>
            <div className={styles.contact_hours}>
              <h3>{contactHoursTitle}</h3>
              <p>{contactHoursInfo}</p>
            </div>
          </div>

          <h1 className={cn(styles.follow_title, 'headtext_cormorant')}>{socialTitle}</h1>
          <div className={styles.contact_social}>
            <SocialMedia />
          </div>

          {/* Contact Form Section */}
          <div className={styles.contact_form}>
            <h3>Send Us a Message</h3>
            <form>
              <div className={styles.form_group}>
                <input type="text" placeholder="Your Name" className={styles.form_input} />
                <input type="email" placeholder="Your Email" className={styles.form_input} />
                <textarea placeholder="Your Message" className={styles.form_textarea}></textarea>
              </div>
              <button type="submit" className={styles.submit_button}>Send Message</button>
            </form>
          </div>
        </div>

        <div className={styles.contact_image}>
          <iframe
            src={googleMapUrl}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className={styles.map_iframe}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;