import { createContext, useState } from 'react';
import '../styles/globals.css';

export const ThemeContext = createContext({
  dark: true,
  setDark: (s) => !s
});

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  const values = { dark, setDark };
  // console.log("Hey there, looking for something? Feel free to shoot me a message :)");
  return (
    <ThemeContext.Provider value={values}>
      <Component {...pageProps} />{' '}
    </ThemeContext.Provider>
  );
}

export default MyApp;
