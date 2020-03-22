/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const spotifyEmbedStyle = css`
  margin: 0 auto;
  max-width: 420px;
  iframe {
    width: 100%;
  }
`;

export const SpotifyEmbed = () => (
  <section css={spotifyEmbedStyle}>
    <iframe src="https://open.spotify.com/embed/artist/01k0o5vgiibOGbGJg0HJ6D" height="240" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </section>
);
