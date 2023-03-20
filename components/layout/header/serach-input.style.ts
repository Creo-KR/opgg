import { css } from '@emotion/react';

export default css`
  display: flex;
  align-items: center;
  width: 260px;
  background-color: white;
  padding-left: 14px;
  border-radius: 2px;
  margin-left: auto;
  position: relative;
  > input {
    flex-grow: 1;
    font-size: 12px;
  }

  > button {
    width: 54px;
    height: 32px;
    background: url(https://s-lol-web.op.gg/images/icon/icon-gg.svg);
    background-repeat: no-repeat;
    background-size: 32px;
    background-position: 12px center;
  }
`;
