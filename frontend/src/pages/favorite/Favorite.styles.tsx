import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { breakpoints as bp } from '../../utils/layout';

export const CardsWrapper = styled(Grid)`
  display: flex;
  flex-direction: row;
  grid-template-rows: repeat(2, 1fr);

  @media (min-width: ${bp.sm}) {
    grid-template-rows: repeat(3, 1fr);
  }

  @media (min-width: ${bp.lg}) {
    grid-template-rows: repeat(6, 1fr);
  }
`;
