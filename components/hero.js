/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const heroStyle = css`
  text-align: center;
  img {
    width: 100%;
  }
  .content {
  }
  h1 {
    font-weight: 300;
    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }
  h2 {
    font-weight: 400;
  }
`;

export const Hero = () => (
  <section css={heroStyle}>
    <img src="images/bg-1.jpg" />
    <div className="content">
      <h1 className="heading">No Bathroom Breaks</h1>
      <h2>Spreading the love and good vibes through jazz and hip-hop.</h2>
    </div>
  </section>
);
