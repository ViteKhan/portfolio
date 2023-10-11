import { Flex } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './AppRouterConfig';

export const AppRouter = () => {
  return (
    <Flex as={'main'}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routerConfig.map(({ path, element }) =>
            <Route
              key={path}
              path={path}
              element={element}
            />
          )}
        </Routes>
      </Suspense>
    </Flex>
  );
};