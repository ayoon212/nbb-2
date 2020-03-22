/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FacebookIcon, InstagramIcon, SpotifyIcon } from './icons';

const socialLinks = [
  {
    href: 'https://open.spotify.com/artist/01k0o5vgiibOGbGJg0HJ6D?si=3_vmemcxTMuwClIHFe9-zg',
    icon: <SpotifyIcon className="icon" />,
    title: 'Spotify',
  },
  {
    href: 'https://www.instagram.com/nobathroombreaks',
    icon: <InstagramIcon className="icon" />,
    title: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/No-Bathroom-Breaks-246682152550445/',
    icon: <FacebookIcon className="icon" />,
    title: 'Facebook',
  },
];

const socialStyle = css`
  a {
    img, svg {
      display: inline-block;
      height: 60px;
      width: 60px;
    }
  }
  h2 {
    font-size: 1.875rem;
    text-align: center;
  }
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 300px;
  }
`;

export const Social = () => (
  <section css={socialStyle}>
    <h2 className="heading secondary">Follow Us</h2>
    <div className="links">
      {socialLinks.map(link => (
        <a key={link.title} href={link.href} title={link.title} target="_blank">
          {link.icon}
        </a>
      ))}
    </div>
  </section>
);
