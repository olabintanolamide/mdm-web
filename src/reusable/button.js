import  React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
width: "99px", height: "32px",
  background: "#F1F2F6",
  color: "#F1F2F6",
  variant: "contained",
  margin:2,
  color: "#6B6C7E;",
  border:0
});




 function ReusableButton() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
         
          <StyledButton  {...bindTrigger(popupState)}>
            Category
          
          </StyledButton>
          <StyledButton {...bindTrigger(popupState)}>
            Category  
          </StyledButton>
          <StyledButton {...bindTrigger(popupState)}>
            Category
          </StyledButton>
          
          
         
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
export default ReusableButton