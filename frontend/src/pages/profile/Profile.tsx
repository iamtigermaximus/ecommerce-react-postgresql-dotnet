import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { LoginContainer } from '../user-forms/login/Login.styles';
import { logout } from '../../redux/reducers/authSlice';

export const PageContainer = styled(Container)`
  height: 100vh;
`;
const Profile = () => {
  const authInfo = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <PageContainer>
      <LoginContainer>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            border: '1px solid gray',
          }}
        >
          {authInfo.loggedIn ? (
            <Box>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p>Welcome, you are logged in {authInfo.userInfo?.name}!</p>
                <Box>
                  <Typography variant="h5">User Information</Typography>
                </Box>
              </Box>
              <Box
                maxWidth="lg"
                key={authInfo.userInfo?.id}
                sx={{
                  width: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <TextField
                  id="outlined"
                  label="NAME"
                  sx={{ mb: 2 }}
                  type="text"
                  value={authInfo.userInfo?.name}
                />
                <TextField
                  id="outlined"
                  label="EMAIL"
                  sx={{ mb: 2 }}
                  type="email"
                  value={authInfo.userInfo?.email}
                />
                <TextField
                  id="outlined"
                  label="PASSWORD"
                  sx={{ mb: 2 }}
                  type="password"
                  value=""
                />
                <Button variant="contained">Edit</Button>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => dispatch(logout(navigate('/')))}
                >
                  log out
                </Button>
              </Box>
            </Box>
          ) : (
            ''
          )}
        </Box>
      </LoginContainer>
    </PageContainer>
  );
};

export default Profile;
