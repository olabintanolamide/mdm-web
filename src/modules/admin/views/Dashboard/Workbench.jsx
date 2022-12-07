import React from 'react'
import { Box, Paper, Typography, } from '@mui/material'
import { styled } from '@mui/material/styles';
import { ReactComponent as CardRequest } from "../../../../assets/svg/off.svg";
import { ReactComponent as Printer } from "../../../../assets/svg/printer.svg";
import { ReactComponent as Cardtemplate } from "../../../../assets/svg/cardtemplate.svg";
import { ReactComponent as Signature } from "../../../../assets/svg/signature.svg";
import { ReactComponent as Responstime } from "../../../../assets/svg/responsetime.svg";
import { ReactComponent as Tasklist} from "../../../../assets/svg/tasklist.svg";






const StyledBox =styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
})
const StyledTypography = styled(Typography)({
fontWeight: 500,
fontSize: "16px",
color: "#272833",
 padding: "10px",
color:"#1E0A3C",

})
const StyledPaper = styled(Paper)({
  height: "229px", width: "800px",
  border:'1px solid #E5E5EA',
  borderRadius: '0px 0px 4px 4px',
})


const Workbench = () => {
  return (
    <div>
         <Typography>WorkBench</Typography>
       <StyledBox>
        <StyledPaper> 
          <Paper sx={{ boxShadow: '0px 2px 0px #E5E5EA', borderRadius: '4px 4px 0px 0px' }}>
            <Typography sx={{ fontWeight: 400, fontSize: "18px", color:"#1E0A3C"}}>
            <Tasklist />  Task: You Have 63 request to attend to.
            </Typography>
          </Paper>
      </StyledPaper>
      <Paper sx={{
        width: "200px",
        height: "229px",
        ml:2
        }}> <StyledTypography sx={{fontSize:"20px"}}>  <Responstime/> Response time</StyledTypography>
          <Typography sx={{
            fontSize: "14px", padding:"5px"
        }}> You have 12 pending request to  attend to. Your progress activity is excellent</Typography>
        </Paper>
      <StyledBox>
          <Paper sx={{ height: "147px", width: "241px", mt: 2, mr: 2 }}>
            <StyledTypography> < CardRequest /> Card Request</StyledTypography>
        </Paper>
          <Paper sx={{ height: "147px", width: "241px", mt: 2, mr: 2 }}>
            <StyledTypography><Printer/> Printing Queue </StyledTypography>
          </Paper>
          <Paper sx={{ height: "147px", width: "241px", mt: 2, mr: 2 }}>
              <StyledTypography> <Signature/>Signatories</StyledTypography>
        </Paper>
          <Paper sx={{ height: "147px", width: "241px", mt: 2, mr: 2 }}>
              <StyledTypography> <Cardtemplate /> Card Template</StyledTypography>
         </Paper>
        
      </StyledBox>
    
    </StyledBox>
    </div>
  )
}

export default Workbench