import { reach } from 'yup';
import { YoutubeForm } from './components/YoutubeForm/YoutubeForm';
import { GlobalStyle } from './globalStyles';
import { Suspense } from 'react';
import { LngChange } from './components/LngChange/LngChange';
import { Loading } from './components/Loading/Loading';

function App() {
  return (
    <Suspense fallback={() => <Loading />}>
      <GlobalStyle />
      <LngChange />
      <YoutubeForm />
    </Suspense>
  );
}

export default App;
