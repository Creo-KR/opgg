import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  border-left: 1px solid #cdd2d2;
  padding: 16px;

  h3 {
    font-size: 12px;
    color: ${theme.colors.brownishGreyTwo};
  }

  ul {
    margin-top: 20px;

    li {
      display: flex;
      :not(:last-child) {
        margin-bottom: 20px;
      }

      img {
        width: 28px;
        height: 28px;
        margin-right: 8px;
      }

      h4 {
        font-size: 14px;
        color: #333333;
        margin-bottom: 3px;
      }

      p {
        font-size: 11px;
        white-space: nowrap;

        .blue {
          color: ${theme.colors.bluish};
        }
      }

      .divider {
        position: relative;
        width: 1px;
        height: 12px;
        border-right: 1px solid #cdd2d2;
        margin: 0 6px;
      }
    }
  }
`;
