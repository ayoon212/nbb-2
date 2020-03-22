/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const members = [
  {name: 'Dustin Park', role: 'MC' },
  {name: 'Harry Ostrander', role: 'Trumpet' },
  {name: 'Lawrence Pi', role: 'Tenor Sax' },
  {name: 'Andy Yoon', role: 'Guitar' },
  {name: 'Marc Encabo', role: 'Keys' },
  {name: 'Jay Hemphill', role: 'Bass' },
  {name: 'Brian Gazo', role: 'Drums' },
];

const membersStyle = css`
  .members {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    > * {
      flex: 0 0 30%;
    }
    .member {
      margin-bottom: 1rem;
      p {
        margin: 0;
      }
    }
  }
`;

export const Members = () => (
  <section css={membersStyle}>
    <div className="members">
      {members.map(member => (
        <div className="member">
          <p className="primary">{member.name}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);
