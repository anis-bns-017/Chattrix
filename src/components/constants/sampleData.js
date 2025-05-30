// avatar = [],
//   name,
//   _id,
//   lastMessage,
//   groupChat = false,
//   sameSender,
//   isOnline,
//   newMessageAlert,
//   index = 0,
//   handleDeleteChatOpen,

import girlPhoto from "../../assets/girl.jpg";

export const sampleChats = [
  {
    avatar: [girlPhoto],
    name: "Anisur Rahman",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [girlPhoto],
    name: "Ariful Islam",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];
