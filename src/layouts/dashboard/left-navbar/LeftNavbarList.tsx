import {
  Box,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { Fragment, useEffect, useLayoutEffect } from "react";
import { useTheme } from "@emotion/react";
import List from "@mui/material/List";
import { NAV_LINKS } from "./LeftNavBarData";
import { useRouter } from "next/router";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import LeftNavbarCollapse from "./LeftNavbarCollapse";
import LeftNavbarListItems from "./LeftNavbarListItems";
import RoleBasedGuard from "@root/guards/RoleBasedGuard";

const LeftNavbarList = (props: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const { open } = props;
  const { pathname } = router;
  const [expanded, setExpanded] = React.useState<string | undefined>(undefined);
  const expandedhander = (value: string) => {
    expanded ? setExpanded(undefined) : setExpanded(value);
  };
  useEffect(() => {
    for (const data of NAV_LINKS) {
      const filter: any = data?.sublist?.filter((data) => {
        return data.sublistlink === pathname;
      });

      if (filter?.length > 0) {
        setExpanded(`open${data.id}`);
      }
      if (filter?.length === 0) {
        setExpanded(undefined);
      }
    }
  }, [pathname]);

  return (
    <List
      sx={{
        mt: open ? 1 : 2,
        pb: { xs: "auto", sm: 4 },
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: 4.5,
          height: 6,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: 2,
        },
      }}
    >
      {NAV_LINKS.map((linkObj) => {
        const { protectedRoute, accessibleRoles } = linkObj;

        let navEl = (
          <LeftNavbarListItems
            expandcollapse={expanded === `open${linkObj.id}`}
            pathname={pathname}
            open={open}
            {...linkObj}
          />
        );

        if (Array.isArray(linkObj.sublist))
          navEl = (
            <>
              {open && (
                <LeftNavbarCollapse
                  index={linkObj.id}
                  expandedhander={expandedhander}
                  expanded={expanded}
                  pathname={pathname}
                  {...linkObj}
                />
              )}
            </>
          );

        if (!protectedRoute) return <div key={linkObj.text}>{navEl}</div>;

        return (
          <RoleBasedGuard
            key={linkObj.link}
            returnNullOnRestriction
            accessibleRoles={accessibleRoles}
          >
            <div key={linkObj.text}>{navEl}</div>
          </RoleBasedGuard>
        );
      })}
    </List>
  );
};

export default LeftNavbarList;
