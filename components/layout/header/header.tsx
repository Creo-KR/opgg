import { css } from '@emotion/react';
import { FC } from 'react';
import SearchInput from './search-input';

const Header: FC = () => {
  return (
    <header
      css={theme => css`
        position: sticky;
        top: 0;
        background-color: ${theme.colors.azure};
        padding: 53px 0 12px;
      `}
    >
      <div className="inner">
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
