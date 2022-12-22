import { Box, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const closeStyle = {
    position: 'absolute',
    right: '0px',
    top: '0px'
}

const ModalComp = ({title, contents, open, setOpen}) => {
    return (
        <>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style} className="modal custom">
                    <IconButton sx={closeStyle} onClick={() => setOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                    <Typography component="h2">{title}</Typography>
                    <Typography component="p">{contents}</Typography>
                </Box>
            </Modal>
        </>
    );
};

export default ModalComp;