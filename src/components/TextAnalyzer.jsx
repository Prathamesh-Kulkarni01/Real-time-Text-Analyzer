import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Container,
} from "@chakra-ui/react";
import WordAnalyzer from "./WordAnalyzer";
import ParagraphAnalyzer from "./ParagraphAnalyzer";

const TextAnalyzer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <ChakraProvider>
      <Text fontSize="48px" fontWeight="bold" mb={2}>
        Text Analyzer
      </Text>
      <Text fontSize="32px" mb={2}>
        Text Analyzer is a simple free online tool for SEO web content analysis
        that helps you find most frequent phrases and words, number of
        characters, words, sentences and paragraphs, and estimated read and
        speak time of your content.
      </Text>
      <Box>
        <Box mt={20} w="100%">
          <Tabs index={activeTab} onChange={handleTabChange} variant="unstyled">
            <TabList width="fit-content" p={1} borderRadius="md" bg="#EAECF0">
              <Tab
                _selected={{
                  color: "black",
                  shadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  bg: "white",
                  bold: true,
                  fontWeight: 550,
                  borderRadius: "md",
                }}
                w={314}
              >
                Word Analyzer
              </Tab>
              <Tab
                _selected={{
                  color: "black",
                  bg: "white",
                  fontWeight: 550,
                  borderRadius: "md",
                }}
                w={314}
              >
                Paragraph Analyzer
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                <WordAnalyzer />
              </TabPanel>
              <TabPanel p={0}>
                <ParagraphAnalyzer />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default TextAnalyzer;
