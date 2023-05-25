import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "#639")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading size={"1xl"} as={Link} to="/tasks">
            Taks
          </Heading>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? "☀️" : "🌛"}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
