import { useState } from "react";
import { Divider, Flex, Heading, Box, Input, Stack } from "@chakra-ui/react";
import { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login = memo(() => {
  const [userId, setUserId] = useState("");

  const onChangeuserId = (e) => {
    setUserId(e.target.value);
  };

  return (
    <Flex align="center" justify="center" height="80vh">
      <Box bg="white" w="xs" p={5} borderRadius="xl" shadow="2xl">
        <Heading as="h3" size="md" textAlign="center">
          マイアプリにようこそ
        </Heading>
        <Divider my={5} />
        <Stack spacing={3} py={2} px={2}>
          <Input
            placeholder="ユーザーID"
            type="text"
            value={userId}
            onChange={onChangeuserId}
          />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
