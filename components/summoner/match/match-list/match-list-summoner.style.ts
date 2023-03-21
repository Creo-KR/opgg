import { css, Theme } from '@emotion/react';

export default (theme: Theme) => css`
  display: flex;

  .team-summoner {
    width: 84px;
    display: inline-flex;
    align-items: center;
    :not(:last-child) {
      margin-bottom: 2px;
    }
    img {
      width: 16px;
      height: 16px;
      border: solid 1px #0d0819;
      margin-right: 3px;
    }
    p {
      font-size: 11px;
      letter-spacing: -0.42px;
      color: ${theme.colors.greyishBrown};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.me {
      font-weight: bold;
    }
  }
`;
