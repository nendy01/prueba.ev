import { Button } from "@chakra-ui/react";
import React from "react";

const MakeTaskBtn = ({ task: { id, title } }) => {
  return (
    <Button
      mt={10}
      w={"full"}
      bg={"green.400"}
      color={"white"}
      rounded={"xl"}
      boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
      onClick={() => handleMessage("primero debe hacer la tearea 1")}
    >
      Hacer {title}
    </Button>
  );
};

export default MakeTaskBtn;
