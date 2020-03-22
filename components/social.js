/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FacebookIcon, InstagramIcon, SpotifyIcon } from './icons';

const socialLinks = [
  {
    href: '#',
    icon: <SpotifyIcon className="icon" />,
    title: 'Spotify',
  },
  {
    href: '#',
    icon: <InstagramIcon className="icon" />,
    title: 'Instagram',
  },
  {
    href: '#',
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
`;

export const Social = () => (
  <section css={socialStyle}>
    <h2 className="heading secondary">Follow Us</h2>
    {socialLinks.map(link => (
      <a key={link.title} href={link.href} title={link.title} target="_blank">
        {link.icon}
      </a>
    ))}
  </section>
);
