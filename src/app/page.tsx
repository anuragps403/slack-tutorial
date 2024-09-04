"use client"

import { UserButton } from "@/features/auth/components/user-button";
import { useCreateWorkspaceModal } from "@/features/workspace/store/use-create-workspace-modal";
import { userGetWorkspaces } from "@/features/workspace/api/user-get-workspaces";
import { useEffect, useMemo } from "react";

export default function Home() {
  const [ open, setOpen ] = useCreateWorkspaceModal();
  const { data, isLoading } = userGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id , [data]);

  useEffect(() => {
    if(isLoading) return;

    if(workspaceId) {
      console.log("Redirect to workspace");
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceId, isLoading, open, setOpen]);

  return (
    <div>
      <UserButton />
    </div>
  );
};
