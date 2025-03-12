import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import SocialMedia from 'components/Contact/SocialMedia';
import styles from './styles.module.scss';

const Contacts = () => {
  const sectionTitle = "Get in Touch";
  const mainTitle = "Contact Us";
  const introText = "We'd love to hear from you!";
  const contactHoursTitle = "Contact Hours";
  const contactHoursInfo = "Mon-Fri: 9 AM - 5 PM";
  const socialTitle = "Follow Us";

  const fallbackImage = '/saafImage/saaflogo.jpeg';
  const imageUrl = fallbackImage;

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
          <Image
            src={imageUrl}
            alt="Contact Us"
            width={600}
            height={650}
            objectFit="cover"
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;