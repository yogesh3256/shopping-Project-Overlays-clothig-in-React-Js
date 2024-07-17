import { Box, Modal } from '@mui/material'
import React from 'react'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    borderRadius: '8px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function CheckOutModal({proceedCheckOutModal,setProceedCheckOutModal}) {
    return (
        <div>
            <div>
                <Modal
                    open={proceedCheckOutModal}
                    onClose={()=>setProceedCheckOutModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default CheckOutModal