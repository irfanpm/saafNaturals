  import React from 'react';
  import styles from './TeamSection.module.scss';

  const TeamSection = () => {
    const teamMembers = [
      {
        id: 1,
        name: 'Muhammed Asru',
        role: 'Founder / CEO',
        image: '/saafImage/asrudad.jpg',

        socialLinks: [
          { icon: 'linkedin', url: '#' },
          { icon: 'twitter', url: '#' },
        ],
      },
      {
        id: 2,
        name: '',
        role: 'CFO',
        image: '/saafImage/asru.jpg',
        socialLinks: [
          { icon: 'linkedin', url: '#' },
          { icon: 'twitter', url: '#' },
        ],
      },
    ];

    return (
      <div className={styles.teamSection} id='owner'>
        <div className={styles.full_background}></div>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Our Leadership</h2>
            <p className={styles.description}>
              This is a section of some simple filler text, also known as placeholder text.
            </p>
          </div>
          <div className={styles.grid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamMember}>
                <div className={styles.imageContainer}>
                  <img src={member.image} alt={member.name} className={styles.image} />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <div className={styles.socialLinks}>
                    {member.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                          {link.icon === 'linkedin' ? (
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          ) : (
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          )}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default TeamSection;