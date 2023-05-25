import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Task = ({ task, handleMessage, isFirstCompleted }) => {
  const { id, title, isCompleted, pending } = task;

  const hasPending = pending?.length !== 0;
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text fontSize={"3xl"} fontWeight={800}>
            {title}
          </Text>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          {hasPending ? (
            task.pending?.map(({ title, isCompleted, id }) => {
              return isCompleted ? (
                <Text>{title} realizada</Text>
              ) : (
                <Button as={Link} to={`/tasks/${id}/`}>
                  Hacer {title}
                </Button>
              );
            })
          ) : isCompleted ? (
            <Text>{title} realizada</Text>
          ) : (
            <Button as={Link} to={`/tasks/${id}/`}>
              Hacer {task.title}
            </Button>
          )}
        </Box>
      </Box>
    </Center>
  );
};

export default Task;
