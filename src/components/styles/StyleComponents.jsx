import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor } from "../constants/color";

export const VisuallyHiddenInput = styled("input")({
  border: "0",
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whitespace: "nowrap",
  width: 1,
});

export const Link = styled(LinkComponent)({
  textDecoration: "none",
  color: "black",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

export const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 3rem;
  outline: none;
  border-radius: 1.5rem;
  background-color: ${grayColor};
`;
