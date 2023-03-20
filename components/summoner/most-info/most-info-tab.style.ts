import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  ul {
    display: flex;

    li {
      flex-grow: 1;
      :not(:last-child) {
        border-right: 1px solid #cdd2d2;
      }
      button {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 15px 0 14px;
        background-color: ${theme.colors.white};
        font-size: 12px;
        color: ${theme.colors.coolGrey};
        border-bottom: 1px solid #cdd2d2;

        &.active {
          background-color: inherit;
          font-weight: bold;
          color: ${theme.colors.brownishGrey};
          border-bottom: 0;
        }
      }
    }
  }
`;
