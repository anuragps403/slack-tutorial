import { useMutation } from "convex/react";

import { api } from "../../../../convex/_generated/api";
import { useCallback, useMemo, useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";

// or we could driectly use tanStack for query
// https://docs.convex.dev/client/tanstack-query

type RequestType = { name: string };
type ResponseType = Id<"workspaces"> | null;

type Options = {
    onSuccess?: (data: ResponseType) => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;
    // Below is a better way to throw error, as it allow the api user to decide how they want to get there error
    throwError?: boolean;
};

export const useCreateWorkspace = () => {
    const [data, setData] = useState<ResponseType>(null);
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState<"success" | "error" | "settled" | "pending" | null>(null);

    const isPending = useMemo(() => status === "pending", [status]);
    const isSuccess = useMemo(() => status === "success", [status]);
    const isError = useMemo(() => status === "error", [status]);
    const isSettled = useMemo(() => status === "settled", [status]);

    const mutation = useMutation(api.workspaces.create);

    // Reason for callback, so we could use outside(e.g useEffect)
    const mutate = useCallback(async (values: RequestType, options?: Options) => {
        try {
            setData(null);
            setError(null);
            setStatus("pending")

            const response = await mutation(values);
            options?.onSuccess?.(response);
            return response;
        } catch(error) {
            options?.onError?.(error as Error);

            // Safer way to throw error i8nstead of just throw error here
            if(options?.throwError) {
                throw error;
            }
        } finally {
            setStatus("settled");
            options?.onSettled?.();
        }
    }, [mutation]);

    return { mutate, data, error, isPending, isSettled, isSuccess, isError };
};