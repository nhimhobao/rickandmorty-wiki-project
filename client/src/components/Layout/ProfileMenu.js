import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { logoutUrl } from "../urls";

const ProfileMenu = ({ user }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "profileMenu",
  });

  return (
    <>
      <Button
        startIcon={
          <Avatar src={user.picture} style={{ width: 20, height: 20 }} />
        }
        {...bindTrigger(popupState)}
      >
        {user.nickname}
      </Button>
      <Menu
        getContentAnchorEl={null}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        {...bindMenu(popupState)}
      >
        <MenuItem component="a" href={logoutUrl}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
