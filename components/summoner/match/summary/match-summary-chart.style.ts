import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .statistics-chart-text {
    position: absolute;
    font-size: 14px;
    color: ${theme.colors.greyishBrown};
  }
`;
