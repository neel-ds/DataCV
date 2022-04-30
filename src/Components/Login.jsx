import React, { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../services/appwriteConfig";
// import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Login = () => {
  const navigate = useNavigate();
  
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
  
    try {
      await account.createSession(userDetails.email, userDetails.password);
       navigate("/dashboard");
    } catch (error) {
      toast.error(`${error.message}`)

    }
  };

  // const theme = createTheme();
  // <ThemeProvider theme={theme}>
  //     <div style={{"minHeight": "100vh","backgroundColor": "rgb(226 232 240)"}}>
  //     <Container   component="main" maxWidth="xs">
  //       <CssBaseline />
  //       <Box
  //         sx={{
  //           padding: 8,
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //           <LockOutlinedIcon />
  //         </Avatar>
  //         <Typography component="h1" variant="h5">
  //           Log In
  //         </Typography>
  //         <Box component="form" noValidate sx={{ mt: 3 }}>
  //           <Grid container spacing={2}>
  //             <Grid item xs={12} sm={6}>
              
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
                
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                onChange={(e) => {
  //             setUserDetails({
  //               ...userDetails,
  //               email: e.target.value,
  //             });
  //           }}
  //                 required
  //                 fullWidth
  //                 id="email"
  //                 label="Email Address"
  //                 name="email"
  //                 autoComplete="email"
                
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                onChange={(e) => {
  //                             setUserDetails({
  //                               ...userDetails,
  //                               password: e.target.value,
  //                             });
  //                           }}
  //                 required
  //                 fullWidth
  //                 name="password"
  //                 label="Password"
  //                 type="password"
  //                 id="password"
  //                 autoComplete="new-password"
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
            
        
  //             </Grid>
  //           </Grid>
  //           <Button
  //            onClick={(e) => loginUser(e)}
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             sx={{ mt: 3, mb: 2 }}
  //           >
  //             LogIn
  //           </Button>
  //           <Grid container justifyContent="flex-end">
  //             <Grid item>
  //               <Link href="#" variant="body2">
  //                New here? Sign Up
  //               </Link>
  //             </Grid>
  //           </Grid>
  //         </Box>
  //       </Box>
        
  //     </Container>
  //     </div>
    
  //   </ThemeProvider>
  
  //                         }

  return (
       <div style={{"minHeight":"100vh", "backgroundColor":"rgb(222 232 240"}}>
     <h3 className=" text-center">Login</h3>
      <form className="container">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <Grid item xs={12}>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
           </Grid>
        </div>
       
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
            required
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <span>New here ? </span>
          <Link to="/register">
            <button className="btn btn-primary mx-1">Signup</button>
          </Link>
        </div>


        <button
        style = {{backgroundColor:"#51c4d3"}}
          type="submit"
          onClick={(e) => loginUser(e)}
          className="btn btn-success"
        >
          Login
        </button>
      </form>  
    </div>
  );};


export default Login;
