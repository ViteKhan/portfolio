import { Box } from '@chakra-ui/react';
import { AppRouter } from 'components/AppRouter';
import { Suspense } from 'react';

function App() {
  return (
    <Box>
      {/* this Suspense for i18n, which will be loaded in chunks*/}
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter/>
      </Suspense>
    </Box>
  );
}

export default App;
