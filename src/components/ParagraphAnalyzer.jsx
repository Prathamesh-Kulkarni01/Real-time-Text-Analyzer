import React, { useState, useEffect } from "react";
import {
  Textarea,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";

const ParagraphAnalyzer = () => {
  const [details, setDetails] = useState({});

  const handleInputChange = (e) => {
    const text = e.target.value;
    const characters = text.length;
    const words = text.split(/\s+/).filter((word) => word !== "").length;
    const sentences = text
      .split(/[.!?]/)
      .filter((sentence) => sentence !== "").length;
    const paragraphs = text.split("\n").filter((para) => para !== "").length;
    const punctuation = text
      .split(/[\.,;:'"!()\-–]/)
      .filter((punc) => punc !== "").length;
    const spaces = text.split(" ").length - 1;

    setDetails({
      characters,
      words,
      sentences,
      paragraphs,
      punctuation,
      spaces,
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} mt={4}>
      <Textarea
        placeholder="Type, or copy/paste your content here."
        variant="filled"
        size="lg"
        mb={4}
        rows="8"
        cols="50"
        h={300}
        bg="white"
        border="1px solid #D2D6DB"
        onChange={handleInputChange}
      />
      <Table variant="unstyled" mb={4} size="md">
        <Thead bg="#FFFFFF">
          <Tr borderBottom="1px solid #ccc">
            <Th>Words</Th>
            <Th>Characters</Th>
            <Th>Sentences</Th>
            <Th>Paragraphs</Th>
            <Th>Punctuation</Th>
            <Th>Spaces</Th>
          </Tr>
        </Thead>
        <Tbody bg="#F9FAFB">
          <Tr>
            <Td>{details?.words}</Td>
            <Td>{details?.characters}</Td>
            <Td>{details?.sentences}</Td>
            <Td>{details?.paragraphs}</Td>
            <Td>{details?.punctuation}</Td>
            <Td>{details?.spaces}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default ParagraphAnalyzer;
