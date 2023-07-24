import { Box, Typography, TextField } from '@mui/material';
import {
  NewsletterBody,
  NewsletterContainer,
  NewsletterContent,
  NewsletterForm,
  NewsletterHead,
  SubscribeButton,
} from './NewsletterSection.styles';

const NewsletterSection = () => {
  return (
    <NewsletterContainer maxWidth={false}>
      <NewsletterContent
        sx={{
          p: 1,
        }}
      >
        <NewsletterHead
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Subscribe to our Newsletter
        </NewsletterHead>
        <NewsletterBody variant="body1" gutterBottom>
          Subscribe now and get 10% off of one order. Be among the first to hear
          about benefits, offers and events.
        </NewsletterBody>
      </NewsletterContent>
      <NewsletterForm
        sx={{
          p: 1,
        }}
      >
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField fullWidth label="Email" />
        </Box>
        <Box
          sx={{
            py: 2,
          }}
        >
          <SubscribeButton variant="contained">Subscribe</SubscribeButton>
        </Box>
      </NewsletterForm>
    </NewsletterContainer>
  );
};

export default NewsletterSection;
