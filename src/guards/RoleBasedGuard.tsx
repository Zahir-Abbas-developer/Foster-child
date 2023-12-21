import { Alert, AlertTitle, alpha, Box } from "@mui/material";
import PermissionDenied from "@root/components/PermissionDenied";
import useAuth from "@root/hooks/useAuth";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

const useCurrentRole = () => {
  const { user }: any = useAuth();

  return user?.role?.baseRole;
};

export default function RoleBasedGuard({
  accessibleRoles,
  returnNullOnRestriction,
  children,
}: {
  accessibleRoles: string[];
  returnNullOnRestriction: boolean;
  children: ReactNode;
}) {
  const currentRole = useCurrentRole();

  if (!accessibleRoles.includes(currentRole)) {
    if (returnNullOnRestriction) return null;
    return <PermissionDenied />;
  }

  return <>{children}</>;
}
