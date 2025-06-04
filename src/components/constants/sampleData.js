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
import earthPhoto from "../../assets/earth.jpg";

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

export const sampleUsers = [
  {
    avatar: [girlPhoto],
    name: "Jakir Hossain",
    _id: "1",
  },
  {
    avatar: [girlPhoto],
    name: "Mohammad Yeasin",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: [girlPhoto],
      name: "Jakir Hossain",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: [girlPhoto],
      name: "Mohammad Yeasin",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Hey there, i am using Chattu",
    _id: "asdfasdfa",
    sender: {
      _id: "user._id",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "02-04-2025",
  },

  {
    attachments: [
      {
        public_id: "asdfas 2",
        url: earthPhoto,
      },
    ],
    content: "",
    _id: "asdfaaa",
    sender: {
      _id: "asdfasd",
      name: "Chaman 2",
    },
    chat: "chatId",
    createdAt: "03-22-2025",
  },
];
