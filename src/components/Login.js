import { Box } from "@mui/material";
import Header from "./Header";
import SignInBody from "./signInBody";
import {Button} from "@mui/material";
import {Typography} from "@mui/material";
const Login=()=>{
  return(
    <div>
<Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg)', // Replace with your image URL
        backgroundSize: 'contain', // Ensures the background image fits within the container
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Header/>
      

      <SignInBody/>
      <Box
        sx={{
          flex: 1, // Takes up the remaining space
          padding: 4,
           // Slightly transparent overlay to help with text visibility
          color: 'white',
        
        }}
      ></Box>

</Box>


  
    </div>
  )
}

export default Login;