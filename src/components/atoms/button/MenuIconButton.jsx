import { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export const MenuIconButton = memo((props) => {
  const { onOpen } = props;

  return (
    <IconButton
      colorScheme="white"
      aria-label="メニューボタン"
      icon={<InfoIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
