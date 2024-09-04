"use client"

import { CreateWorkspaceModal } from "@/features/workspace/components/create-workspace-modal"
import { useEffect, useState } from "react";

export const Modals = () => {
    // To fix potential error, to make sure modal only show when client side rendering is done
    // UseEffect is only called in client side rendering
    // so if it is not client side rending we return nulll
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    return (
        <>
            <CreateWorkspaceModal />
        </>
    );
};