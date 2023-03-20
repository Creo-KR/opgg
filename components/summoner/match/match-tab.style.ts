import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  border-bottom: 1px solid #cdd2d2;
  ul {
    display: flex;
    background-color: ${theme.colors.white};
    padding: 12px 0 10px 16px;

    li {
      &:not(:last-child) {
        margin-right: 24px;
      }

      button {
        position: relative;
        font-size: 12px;
        color: ${theme.colors.greyishBrown};

        :hover {
          color: ${theme.colors.bluish};
        }

        &.active {
          font-weight: bold;
          color: ${theme.colors.bluish};
          ::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            bottom: -10px;
            border-bottom: 2px solid;
          }
        }
      }
    }
  }
`;
