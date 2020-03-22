/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const heroStyle = css`
  text-align: center;
  img {
    width: 100%;
    max-width: 540px;
  }
  .content p {
    font-size: 1.5rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 300;
  }
`;

export const Hero = () => (
  <section css={heroStyle}>
    <img src="images/bg-1.jpg" alt="Hero Image" />
    <div className="content">
      <h1 className="heading">No Bathroom Breaks</h1>
      <p>Spreading the love and good vibes through fresh jazz/hip-hop.</p>
    </div>
  </section>
);
