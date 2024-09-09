"use client";
import { Sidebar } from "./sidebar";
// In this case the children component is not neccary will be client component (Bery good next js behavior, i think it with only layout case)

import { Toolbar } from "./toolbar";

interface WorkspaceIdLayoutProps {
    children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
        <Toolbar />
        <div className="flex h-[calc(100vh-40px)]">
            <Sidebar />
            {children}
        </div>
    </div>
  );
};

export default WorkspaceIdLayout;