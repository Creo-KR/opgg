import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  padding: 4px 5px 3px;
  font-size: 11px;
  letter-spacing: -0.42px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
  color: ${theme.colors.slateGrey};

  :not(:last-child) {
    margin-right: 7px;
  }
`;
