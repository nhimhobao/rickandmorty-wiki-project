import { Box, Container } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const EmptyList = () => (
  <Box display="flex" justifyContent="space-around" py={2}>
    <Container maxWidth="sm">
      <Alert variant="outlined" color="info">
        <AlertTitle>Nothing here</AlertTitle>
        Add some bookmark from homepage
      </Alert>
    </Container>
  </Box>
);

export default EmptyList;
