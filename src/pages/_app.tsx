import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
interface Props {
    Component: any;
    pageProps: any
}
function MyApp({ Component,  pageProps }:Props) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;