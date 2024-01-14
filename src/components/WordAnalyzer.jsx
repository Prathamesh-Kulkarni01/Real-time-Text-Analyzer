import React, { useState, useEffect } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import WordDetails from "./WordDetails";
import fetch from "../services/apiService";

const WordAnalyzer = () => {
  const [text, setText] = useState("");
  const [wordDetails, setWordDetails] = useState(null);


  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAnalyzeClick = async () => {
    const data = await fetch(text);
    const charArray = text.split(" ");
    const wordCount = charArray.length;
    const charCount = charArray.join("").length;
    setWordDetails({ ...data, wordCount, charCount });
  };

  return (
    <Box>
      <Box
        display="flex"
        gap={2}
        mt={26}
        mb={26}
        justifyContent="center"
        alignItems="center"
      >
        <Input
          placeholder="Enter a word"
          variant="filled"
          size="lg"
          value={text}
          onChange={handleInputChange}
        />
        <Button
          bg="#731EE2"
          color="white"
          size="md"
          onClick={handleAnalyzeClick}
        >
          Analyze
        </Button>
      </Box>
      <WordDetails details={wordDetails} />
    </Box>
  );
};

export default WordAnalyzer;
