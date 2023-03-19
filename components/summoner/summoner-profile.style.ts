import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  padding: 15px 0 14px;
  border-bottom: 1px solid #d8d8d8;
  .prev-tier-list {
    display: flex;
    margin-bottom: 6px;
    padding-left: 11px;
  }
  .profile-wrap {
    display: flex;

    .profile-image-wrap {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;

      > .profile-image {
        position: absolute;
        width: 100px;
        height: 100px;
      }

      > .profile-image-border {
        position: relative;
        width: 100%;
        height: 100%;
      }

      > .profile-level {
        position: absolute;
        bottom: 0;
        padding: 3px 14px 4px;
        background-color: #2c3548;
        border-style: solid;
        border-width: 1px;
        border-image-source: linear-gradient(to bottom, #f6e08f, #ca9a2c 99%);
        border-image-slice: 1;
        transform: translateY(2px);

        font-size: 14px;
        color: #eabd56;
      }
    }
    .profile-info {
      padding: 11px 17px;

      > h1 {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: -0.77px;
        color: ${theme.colors.charcoal};
      }

      > p {
        font-size: 11px;
        letter-spacing: -0.42px;
        color: ${theme.colors.slateGrey};
      }
    }
  }
`;
