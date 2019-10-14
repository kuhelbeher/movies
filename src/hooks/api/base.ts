import {
  useState,
  useReducer,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { AxiosRequestConfig } from 'axios';

import axios from '../../utils/api';

// This hook is based on this - https://mariusschulz.com/blog/the-object-type-in-typescript

enum Types {
  RequestStart = 'REQUEST_START',
  RequestSuccess = 'REQUEST_SUCCESS',
  RequestFail = 'REQUEST_FAIL',
}

export type State = {
  loading: boolean;
  errors: object | null;
  data: any;
};

const requestReducer = (
  state: State,
  action: { type: Types; payload?: any },
): State => {
  switch (action.type) {
    case Types.RequestStart: {
      return {
        ...state,
        loading: true,
        errors: null,
      };
    }
    case Types.RequestSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case Types.RequestFail: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    default: {
      throw new Error();
    }
  }
};

export const useRequest = (
  initialConfig?: AxiosRequestConfig,
  initialData?: any,
): [State, Dispatch<SetStateAction<AxiosRequestConfig | undefined>>] => {
  const [config, setConfig] = useState<AxiosRequestConfig | undefined>(
    initialConfig,
  );

  const [state, dispatch] = useReducer(requestReducer, {
    loading: false,
    errors: null,
    data: initialData || null,
  });

  useEffect(() => {
    let didCancel = false;

    const request = async () => {
      if (!config) {
        return;
      }

      dispatch({ type: Types.RequestStart });

      try {
        const res = await axios.request(config);

        if (!didCancel) {
          dispatch({ type: Types.RequestSuccess, payload: res.data });
        }
      } catch (e) {
        if (!didCancel) {
          dispatch({ type: Types.RequestFail, payload: e.response.data });
        }
      }
    };

    request();

    return () => {
      didCancel = true;
    };
  }, [config]);

  return [state, setConfig];
};
