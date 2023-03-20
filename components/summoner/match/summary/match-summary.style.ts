import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  display: flex;

  .statistics {
    padding: 16px 0 23px 24px;
    border-right: 1px solid #cdd2d2;

    &-games {
      font-size: 12px;
      color: ${theme.colors.brownishGreyTwo};
    }

    &-info {
      margin-top: 14px;
      display: flex;

      .statistics-scores {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 162px;
      }

      .statistics-score-detail {
        margin-top: 17px;
        font-size: 11px;
        color: #999999;
        b {
          color: #333333;
        }
        .red {
          color: ${theme.colors.reddish};
        }
      }

      .statistics-kda {
        margin-top: 6px;
        font-size: 16px;
        color: ${theme.colors.brownishGrey};

        &.kda3 {
          color: ${theme.colors.blueyGreen};
        }

        &.kda4 {
          color: ${theme.colors.bluish};
        }

        &.kda5 {
          color: ${theme.colors.yellowOchre};
        }

        .red {
          color: ${theme.colors.reddish};
        }
      }
    }
  }

  .champion {
    padding: 16px;

    li:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;
