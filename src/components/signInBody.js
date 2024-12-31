import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
const SignInBody = () => {
const[isSignInForm,setIsSignInForm]=useState(true);
  const handleSignIn=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", 
            alignItems: "center", 
            gap: 2, 
           width: "400px", 
            height: "300px",
            marginTop: "150px",
            marginLeft: "500px",
            
            backgroundColor: "rgba(0, 0, 0, 0.8)",

          }}
        >
          {isSignInForm ?
            <Typography sx={{
              color:"white", 
              fontSize:"28px"
            }}>Sign In</Typography>
         :  <Typography sx={{
          color:"white", 
          fontSize:"28px"
        }}>Sign Up</Typography>
         }
       {!isSignInForm && (<TextField
              placeholder="Your name"
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: "gray",
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", 
                  },
                },
              }}
            />)
           } 
            <TextField
              placeholder="Email or mobile number"
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: "gray",
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                },
              }}
            />
            <TextField
              placeholder="password"
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: "gray", // Customize the placeholder color here
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // Default border color
                  },
                },
              }}
            />
           
            <Button variant="contained" color="error">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </Button>
          
          <Typography sx={{
              color:"white", 
              fontSize:"16px",
              cursor:"pointer"
            }} onClick={handleSignIn}>{isSignInForm ? "New to Netflix?Sign Up here" : "Already registered,Sign In now"} </Typography>
        </Box>
      </form>
    </div>
  );
};

export default SignInBody;
