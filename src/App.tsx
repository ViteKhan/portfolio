import { Flex } from '@chakra-ui/react';
import { AppRouter } from 'components/AppRouter';
import { Suspense } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <Flex minHeight={'100vh'} flexDirection={'column'}>
      {/* this Suspense for i18n, which will be loaded in chunks*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        <AppRouter/>
        <Footer/>
      </Suspense>
    </Flex>
  );
}

export default App;
