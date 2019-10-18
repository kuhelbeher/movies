import { useCallback, useEffect } from 'react';

import { useRequest, State } from './base';
import { storageSave, setAuthToken } from '../../utils';
import { Token } from '../../types';

type AuthPayload = {
  email: string;
  password: string;
  passwordConfirmation?: string;
  name?: string;
};

type AuthState = State & {
  data?: {
    token: Token;
  };
};

const initialData = {
  token: {
    tokenType: '',
    accessToken: '',
    expiresAt: '',
  },
};

export const useAuth = (
  isLogin: boolean,
): [AuthState, (data: AuthPayload) => void] => {
  const [state, doRequest]: [AuthState, Function] = useRequest(
    null,
    initialData,
  );

  useEffect(() => {
    storageSave('token', state.data.token);

    setAuthToken(state.data.token);
  }, [state.data.token]);

  const authRequest = useCallback(
    (data: AuthPayload) => {
      const url = isLogin ? '/login' : '/register';

      doRequest({
        url,
        method: 'POST',
        data,
      });
    },
    [doRequest, isLogin],
  );

  return [state, authRequest];
};
