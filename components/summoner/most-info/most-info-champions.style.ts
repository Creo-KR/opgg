import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  li {
    display: flex;
    align-items: center;
    padding: 4px 15px 4px 16px;
    :not(:last-child) {
      border-bottom: 1px solid #cdd2d2;
    }

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .col-1 {
      width: 90px;
    }

    .col-2 {
      text-align: center;
      flex-grow: 1;
    }

    .col-3 {
      text-align: center;
      width: 40px;
    }

    h3,
    .kda,
    .win {
      font-size: 13px;
      font-weight: bold;
      color: ${theme.colors.brownishGrey};
      margin-bottom: 3px;
    }

    .cs,
    .kda-detail,
    .games {
      font-size: 11px;
      color: ${theme.colors.coolGrey};
    }

    .kda3 {
      color: ${theme.colors.blueyGreen};
    }

    .kda4 {
      color: ${theme.colors.bluish};
    }

    .kda5 {
      color: ${theme.colors.yellowOchre};
    }

    .red {
      color: ${theme.colors.reddish};
    }
  }
`;
