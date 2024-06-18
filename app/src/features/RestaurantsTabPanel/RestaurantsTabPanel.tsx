import { Box, Container } from "@mui/material";
import markdownContent from "./restaurants";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const RestaurantsTabPanel = () => {
  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" justifyContent="center">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownContent}
        </ReactMarkdown>
      </Box>
    </Container>
  )
}

export default RestaurantsTabPanel;