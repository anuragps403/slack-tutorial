import { useParams } from "next/navigation"
import { Id } from "../../convex/_generated/dataModel";

// Below will allow global access to custom hook
export const useWorkspaceId = () => {
    const params = useParams();
    return params.workspaceId as Id<"workspaces">;
};
