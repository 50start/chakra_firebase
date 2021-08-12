import { memo, useCallback } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => {
    history.push("/home");
  }, [history]);

  const onClickJob = useCallback(() => {
    history.push("/home/job");
  }, [history]);

  const onClickProgramming = useCallback(() => {
    history.push("/home/programming");
  }, [history]);

  return (
    <>
      <Flex
        as="nav"
        bg="#3182CE"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            最強の係長の部屋へようこそ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickJob}>仕事でお困りの方に</Link>
          </Box>
          <Link onClick={onClickProgramming}>プログラミング学習日記</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickJob={onClickJob}
        onClickProgramming={onClickProgramming}
      />
    </>
  );
});
