import { chakra, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './AppRouterConfig';

const Main = chakra(Flex, {
  baseStyle: {
    px: ['sm', 'md', 'lg'],
    py: 'lg',
    my: '60px',
    mx: 'none',
  },
});

export const AppRouter = () => {
  return (
    <Main as={'main'} flex={1}>
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
    </Main>
  );
};