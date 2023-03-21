import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  display: flex;
  align-items: center;
  .item {
    position: relative;
    width: 22px;
    height: 22px;
    border-radius: 2px;
    img {
      width: inherit;
      height: inherit;
      border-radius: inherit;
    }

    margin-right: 2px;
    margin-bottom: 2px;
    :nth-child(n + 4) {
      margin-bottom: 0;
    }
    :nth-child(3n) {
      margin-right: 0;
    }

    .win &.none {
      background-color: #7aa5c3;
    }
    .loss &.none {
      background-color: #cb9e9a;
    }
  }
  .tooltip {
    position: absolute;
    left: 50%;
    top: -11px;
    z-index: 1;
    font-size: 11px;
    line-height: 1.36;
    color: #ffffff;
    background-color: #222727;
    padding: 10px;
    width: max-content;
    max-width: 280px;
    transform: translate(-50%, -100%);

    :before {
      left: 50%;
      bottom: 2px;
      content: '';
      position: absolute;

      border-top: 10px solid #222727;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;

      transform: translate(-50%, 100%);
    }
  }

  .vision {
    margin-left: 2px;
    display: flex;
    flex-direction: column;
    .item {
      margin-right: 0;
      .win & .red {
        display: none;
      }
      .loss & .blue {
        display: none;
      }
      :nth-child(2) {
        margin-bottom: 0;
      }
    }
  }

  .normal {
    width: 70px;
    display: flex;
    flex-wrap: wrap;
  }
`;
