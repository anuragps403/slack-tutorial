"use client";
// In this case the children component is not neccary will be client component (Bery good next js behavior, i think it with only layout case)

import { Toolbar } from "./toolbar";

interface WorkspaceIdLayoutProps {
    children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
        <Toolbar />
        {children}
    </div>
  )
}

export default WorkspaceIdLayout;