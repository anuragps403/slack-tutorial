import React from 'react'

interface WorkspaceIdPageProps {
    params : {
        workspaceId: string;
    };
};

const WorkspaceId = ({ params} : WorkspaceIdPageProps) => {
  return (
    <div>Id: { params.workspaceId }</div>
  )
};

export default WorkspaceId;