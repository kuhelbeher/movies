import { useRequest, State } from './base';

type AuthPayload = {
  email: string;
  password: string;
  name?: string;
};

export const useAuth = (
  isLogin: boolean,
): [State, (data: AuthPayload) => void] => {
  const [state, doRequest] = useRequest();

  const authRequest = (data: AuthPayload) => {
    const url = isLogin ? '/login' : '/register';

    doRequest({
      url,
      method: 'POST',
      data,
    });
  };

  return [state, authRequest];
};
