import { Box } from "@mui/material";

const Header=()=>{
  return(
    <div>
       
      <Box
        component="img"
        sx={{
          height: 80, // Adjust the size as needed
          width: 'auto',
          display: 'block',
          margin: '0 auto',
          position: 'absolute', 
          top: '20px', 
          left: '80px',
          
        }}
        alt="Logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
  
    </div>
  )
}

export default Header;