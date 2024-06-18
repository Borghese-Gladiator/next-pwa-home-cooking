import { Box, Container } from "@mui/material";
import markdownContent from "./restaurants";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const RestaurantsTabPanel = () => {
  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" justifyContent="center" sx={{ fontSize: 40 }}>
        <ReactMarkdown children={markdownContent} rehypePlugins={[rehypeRaw]} />
      </Box>
    </Container>
  )
}

export default RestaurantsTabPanel;