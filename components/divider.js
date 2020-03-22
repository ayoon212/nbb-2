/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Theme } from '../styles/theme';

const dividerStyle = css`
  background-color: ${Theme.white};
  height: 2px;
  margin: 5rem auto;
  width: 92px;
`;

export const Divider = () => (
  <div css={dividerStyle}></div>
);
