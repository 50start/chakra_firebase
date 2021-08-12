import { memo } from "react";
import { Button } from "@chakra-ui/react";

export const PrimaryButton = memo((props) => {
  const { children } = props;

  return (
    <Button
      bg="#00B5D8"
      color="white"
      _hover={{ color: "black", bg: "#C4F1F9" }}
    >
      {children}
    </Button>
  );
});
