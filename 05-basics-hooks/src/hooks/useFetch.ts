import { useEffect, useState } from "react";

interface UseFetchState<T> {
    data: null | T;
    isLoading: boolean;
    hasError: boolean;
    error: {
        code: null | number;
        message: null | string;
    };
}

interface LocalCache {
    [key: string]: unknown;
}

const localCache: LocalCache = {};

export const useFetch = <T>(url: string) => {
    const [state, setState] = useState<UseFetchState<T>>({
        data: null,
        isLoading: true,
        hasError: false,
        error: {
            code: null,
            message: null,
        },
    });

    useEffect(() => {
        getFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: {
                code: null,
                message: null,
            },
        });
    };

    const getFetch = async () => {
        const cache = localCache[url];
        if (cache) {
            setState({
                data: cache as T,
                isLoading: false,
                hasError: false,
                error: {
                    code: null,
                    message: null,
                },
            });
            return;
        }

        setLoadingState();
        const response = await fetch(url);

        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: "Ocurrió un error",
                },
            });
            return;
        }

        const data = (await response.json()) as T;

        setState({
            data,
            isLoading: false,
            hasError: false,
            error: {
                code: null,
                message: null,
            },
        });

        // Manejo de cache
        localCache[url] = data;
    };

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};
