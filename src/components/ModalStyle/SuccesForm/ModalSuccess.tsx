import React from "react";
import { Flex } from "../../Common/Flex";
import { SuccessDesc, SuccessIcon, SuccessTitle } from "./SuccessStyle";

export const ModalSuccess = () => {
  return (
    <Flex direction="column" justify="center" align="center" gap={30}>
      <SuccessIcon></SuccessIcon>
      <SuccessTitle>congratulations !</SuccessTitle>
      <SuccessDesc>
        The movie has been added to database successfully
      </SuccessDesc>
    </Flex>
  );
};
