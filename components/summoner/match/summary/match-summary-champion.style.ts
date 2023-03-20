import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  display: flex;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 8px;
  }

  h3 {
    font-size: 14px;
    color: #333;
  }

  .none {
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #999999;
  }

  .win-score {
    display: flex;
    align-items: center;

    .win {
      margin-top: 3px;
      font-size: 11px;
      .red {
        color: ${theme.colors.reddish};
      }
    }
    .divider {
      display: block;
      position: relative;
      width: 1px;
      height: 11px;
      margin: 0 6px;
      border-right: 1px solid ${theme.colors.greyishBrown};
    }
    .score {
      font-size: 11px;
      font-weight: bold;

      &.kda6 {
        color: ${theme.colors.yellowOchre};
      }
    }
  }
`;
