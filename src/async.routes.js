import {lazy} from 'react';

export const AsyncUsers = lazy(() =>
  import('./pages/UsersPage'),
);

export const AsyncCreate = lazy(() =>
  import('./pages/CreatePage'),
);

export const AsyncUser = lazy(() =>
  import('./pages/UserPage'),
);

