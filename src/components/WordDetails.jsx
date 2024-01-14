import React from "react";
import { Box, Text, Table, Tr, Th, Tbody, Td, Thead } from "@chakra-ui/react";

const WordDetails = ({ details = {} }) => {
  return (
    <Box py={4}>
      <Table variant="unstyled" mb={4} size="md" w={541}>
        <Thead bg="#FFFFFF">
          <Tr border="1px solid #ccc">
            <Th>Words</Th>
            <Th>Characters</Th>
          </Tr>
        </Thead>
        <Tbody bg="#F9FAFB">
          <Tr>
            <Td>{details?.wordCount}</Td>
            <Td>{details?.charCount}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Box
        display="flex"
        flexDirection="column"
        border="1px solid #D2D6DB"
        padding="1rem"
        borderRadius="0.25rem"
        gap="0.75rem"
      >
        <p>
          <span
            style={{
              color: "#475467",
              width: "137px",
              display: "inline-block",
            }}
          >
            Word:
          </span>{" "}
          {details?.word}
        </p>
        <p>
          <span
            style={{
              color: "#475467",
              width: "137px",
              display: "inline-block",
            }}
          >
            Definition:
          </span>
          {details?.results[0]?.definition}
        </p>
        <p>
          <span
            style={{
              color: "#475467",
              width: "137px",
              display: "inline-block",
            }}
          >
            Part of Speech:
          </span>
          {details?.results[0]?.partOfSpeech}
        </p>
        <p>
          <span
            style={{
              color: "#475467",
              width: "137px",
              display: "inline-block",
            }}
          >
            Synonyms:
          </span>{" "}
          {details?.results[0]?.synonyms?.join(", ")}
        </p>
      </Box>
    </Box>
  );
};

export default WordDetails;
