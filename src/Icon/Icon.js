import React from "react";
import HighlightOffOutlinedIcon
  from '@material-ui/icons/HighlightOffOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const Icon = () => {

  const DeleteIcon = () => {
    return <HighlightOffOutlinedIcon/>

  }
  const NextIcon = () => {
    return <SkipNextIcon/>
  }


  return {
    DeleteIcon,
    NextIcon
  }

}

export default Icon