import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  margin-top: 16px;
  > ul {
    > li {
      display: flex;
      font-size: 11px;
      letter-spacing: -0.42px;
      color: ${theme.colors.greyishBrown};
      padding: 13px 10px 14px 15px;
      align-items: center;
      justify-content: space-between;

      .col1 {
        width: 50px;
        text-align: center;

        h4,
        .result {
          margin-bottom: 4px;
        }

        .divider {
          width: 27px;
          height: 1px;
          margin: 3px auto 5px;
        }
      }
      .col2 {
        width: 102px;

        .champion-icons {
          display: flex;
          .champion {
            width: 46px;
            height: 46px;
            border-radius: 50%;
          }
          .spells {
            display: flex;
            flex-direction: column;
            margin-left: 6px;

            img {
              width: 22px;
              height: 22px;

              :not(:last-child) {
                margin-bottom: 2px;
              }
            }
          }

          .perks {
            display: flex;
            flex-direction: column;
            margin-left: 4px;

            img {
              width: 22px;
              height: 22px;
              border-radius: 50%;
              :not(:last-child) {
                margin-bottom: 2px;
              }
            }
          }
        }
        .champion-name {
          margin-top: 9px;
          text-align: center;
        }
      }
      .col3 {
        width: 80px;
        text-align: center;

        .kda {
          font-size: 15px;
          font-weight: bold;
          letter-spacing: -0.58px;
          color: #555e5e;
          margin-bottom: 6px;

          .s1 {
            font-weight: normal;
            color: #948e8d;
          }

          .s2 {
            color: #d0021b;
          }

          .s3 {
            color: #948e8d;
          }
        }

        .score-wrap {
          color: #555e5e;
          .score {
            color: #333333;
          }
        }

        .labels {
          margin-top: 7px;
          span {
            display: inline-block;
            padding: 3px 5px;
            color: #ffffff;
            border-radius: 9px;

            :not(:last-child) {
              margin-right: 4px;
            }

            &.kill {
              border: solid 1px #bf3b36;
              background-color: #ec4f48;
            }

            &.ACE {
              border: solid 1px #7f3590;
              background-color: #8c51c5;
            }
          }
        }
      }
      .col4 {
        width: 76px;
      }
      .col5 {
        width: 94px;
      }
      .col6 {
        width: 168px;
      }

      :not(:last-child) {
        margin-bottom: 8px;
      }

      .cs,
      .level {
        text-align: center;
        margin-bottom: 6px;
      }

      .kill-percent {
        text-align: center;
        color: #d0021b;
      }

      .items-wrap {
        .items-ward {
          margin-top: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          img {
            margin-right: 4px;
          }
        }
      }

      &.win {
        border: 1px solid ${theme.colors.lightGreyBlue};
        background-color: ${theme.colors.lightBlueGrey};

        .result {
          color: #2c709b;
        }

        .divider {
          border-bottom: 1px solid #94b9d6;
        }
      }

      &.loss {
        border: 1px solid ${theme.colors.pinkishGreyTwo};
        background-color: ${theme.colors.pinkishGrey};

        .result {
          color: #d0021b;
        }

        .divider {
          border-bottom: 1px solid #d0a6a5;
        }
      }

      &.avoid {
        border: 1px solid ${theme.colors.greyishTwo};
        background-color: ${theme.colors.greyish};

        .result {
          color: #000000;
        }

        .divider {
          border-bottom: 1px solid #94b9d6;
        }
      }

      .type {
        font-weight: bold;
      }

      .result {
        font-weight: bold;
      }
    }
  }

  .obs {
    position: absolute;
    width: 1px;
    height: 1px;
    transform: translateY(-30px);
  }
`;
