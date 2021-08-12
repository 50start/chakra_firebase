import { memo } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
} from "@chakra-ui/react";

export const MenuDrawer = memo((props) => {
  const { isOpen, onClose, onClickHome, onClickJob, onClickProgramming } =
    props;

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader color="white" bg="#2B6CB0" borderBottomWidth="1px">
            メニュー一覧
          </DrawerHeader>
          <DrawerBody p={0} bg="#E6FFFA">
            <Button w="100%" backgroundColor="#EDF2F7" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" backgroundColor="#EDF2F7" onClick={onClickJob}>
              仕事でお困りの方に
            </Button>
            <Button
              w="100%"
              backgroundColor="#EDF2F7"
              onClick={onClickProgramming}
            >
              プログラミング学習日記
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
