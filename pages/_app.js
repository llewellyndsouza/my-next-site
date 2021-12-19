import '../styles/globals.css';
import ThemeWrapper from '../components/context/theme';

function MyApp({ Component, pageProps }) {
  // console.log("Hey there, looking for something? Feel free to shoot me a message :)");
  return (
    <ThemeWrapper>
      <Component {...pageProps} />{' '}
    </ThemeWrapper>
  );
}

export default MyApp;
