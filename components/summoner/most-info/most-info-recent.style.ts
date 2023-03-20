import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  li {
    display: flex;
    align-items: center;
    padding: 8px 15px;
    :not(:last-child) {
      border-bottom: 1px solid #cdd2d2;
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
    }

    h3,
    .win {
      font-size: 13px;
      font-weight: bold;
      color: ${theme.colors.brownishGrey};
    }

    h3 {
      width: 71px;
    }

    .games {
      margin-left: 16px;
      display: flex;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      flex-grow: 1;
      position: relative;
      justify-content: space-between;

      > div {
        position: absolute;
        height: 24px;

        &.wins {
          text-align: left;
          background-color: ${theme.colors.bluish};
          border-radius: 4px 0 0 4px;
        }

        &.losses {
          right: 0;
          text-align: right;
          background-color: ${theme.colors.coral};
          border-radius: 0 4px 4px 0;
        }
      }

      > span {
        position: relative;
        padding: 5px 4px 4px;
      }
    }
  }
`;
