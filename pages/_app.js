import '../styles/globals.css';
import { Header, Nav } from '../components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
