import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 36px;
  background-color: #fff;
  border-radius: 2px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #ecf2ff;
  }

  > a {
    padding: 11px;
    display: flex;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 8px;
  }

  h2 {
    font-size: 14px;
    margin-bottom: 6px;
    color: ${theme.colors.greyishBrown};

    > .highlight {
      color: #d31a45;
    }
  }

  p {
    font-size: 11px;
    color: ${theme.colors.slateGrey};
  }
`;
