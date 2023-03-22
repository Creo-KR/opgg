import closeButtonImage from '@/public/images/icon-close-small.svg';
import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 36px;
  transform-origin: top;
  background-color: #fff;
  border-radius: 2px;
  width: 100%;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    font-size: 13px;
    color: #9aa4af;
  }

  li {
    display: flex;
    align-items: center;
    position: relative;
    a {
      padding: 8px 16px;
      display: block;
      width: 100%;
      flex-grow: 1;
      color: #44515c;
    }

    &:hover {
      background-color: #ecf2ff;
    }

    button {
      width: 24px;
      height: 24px;
      background-image: url(${closeButtonImage.src});
      background-color: transparent;
      position: relative;
      font-size: 0;
    }
  }
`;
