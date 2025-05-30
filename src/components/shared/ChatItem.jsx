import React, { memo } from "react";
import { Link } from "../styles/StyleComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  lastMessage,
  groupChat = false,
  sameSender, 
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {

  return (
    <>
      <Link
        sx={{ padding: "0" }}
        to={`/chat/${_id}`}
        onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: sameSender ? "black" : "unset",
            color: sameSender ? "white" : "unset",
            position: "relative",
          }}
        >
          <AvatarCard avatar={avatar} />
          <Stack>
            <Typography>{name}</Typography>
            {newMessageAlert && (
              <Typography>{newMessageAlert.count} New Message</Typography>
            )}
          </Stack>

          {isOnline && (
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            />
          )}
        </div>
      </Link>
    </>
  );
};

export default memo(ChatItem);
