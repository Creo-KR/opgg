import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  width: 282px;
  border: 1px solid #cdd2d2;
  background-color: ${theme.colors.white};
  padding: 10px 8px 10px 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  .rank-image {
    width: 104px;
    height: 104px;

    &.unranked {
      width: 64px;
      height: 64px;
      padding: 20px;
    }
  }

  .rank-info {
    margin-left: 8px;
  }

  h3 {
    font-size: 11px;
    color: ${theme.colors.coolGrey};
  }

  p.rank-games {
    font-size: 12px;
    color: #353a3a;
    margin-top: 4px;
  }

  p.rank-tier {
    font-size: 15px;
    font-weight: bold;
    color: ${theme.colors.bluish};
    margin-top: 4px;
    margin-bottom: 6px;
  }

  p.rank-lp {
    margin-top: 2px;
    font-size: 12px;
    color: ${theme.colors.coolGrey};
    b {
      color: #555e5e;
    }
  }

  p.unranked {
    font-size: 13px;
    font-weight: bold;
    color: ${theme.colors.coolGrey};
    margin-top: 2px;
  }
`;
