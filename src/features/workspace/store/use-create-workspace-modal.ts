import { atom, useAtom } from "jotai";

// This is similar to useState hook, only thing it is a global state now
const modalState = atom(false);

export const useCreateWorkspaceModal = () => {
    return useAtom(modalState);
};
