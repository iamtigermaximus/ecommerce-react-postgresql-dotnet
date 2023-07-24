import { Container, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { breakpoints as bp } from '../../../utils/layout';

export const NewsletterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`;

export const NewsletterContent = styled(Box)`
  display: flex;
  width: 100%;
  background-color: rgb(243, 243, 243);

  @media (min-width: ${bp.md}) {
    flex-direction: column;
    width: 60%;
    padding: 40px;
  }
`;

export const NewsletterForm = styled(Box)`
  display: flex;
  width: 100%;
  background-color: rgb(243, 243, 243);

  @media (min-width: ${bp.md}) {
    flex-direction: column;
    width: 40%;
    padding: 40px;
  }
`;

export const SubscribeButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: orange;
  color: black;
  font-size: 10px;

  &:hover {
    background-color: transparent;
  }
  @media (min-width: ${bp.md}) {
    font-size: 15px;
  }
`;

export const NewsletterHead = styled(Typography)`
  font-size: 13px;
  font-weight: 700;
  padding: 0 10px;

  @media (min-width: ${bp.md}) {
    font-size: 18px;
  }
`;

export const NewsletterBody = styled(Typography)`
  font-size: 12px;
  padding: 0 10px;

  @media (min-width: ${bp.md}) {
    font-size: 15px;
  }
`;
