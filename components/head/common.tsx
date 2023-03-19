import { FC } from 'react';

const CommonHead: FC = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://s-lol-web.op.gg/favicon.ico"
      />
      <link
        rel="apple-touch-icon-precomposed"
        href="https://s-lol-web.op.gg/Icon-72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="https://s-lol-web.op.gg/Icon-72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="https://s-lol-web.op.gg/Icon@2x.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="https://s-lol-web.op.gg/Icon-144.png"
      />
      <meta property="og:site_name" content="OP.GG" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://s-lol-web.op.gg/images/reverse.rectangle.png"
      />
    </>
  );
};

export default CommonHead;
