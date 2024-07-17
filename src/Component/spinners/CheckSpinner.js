import React from 'react';
import './CheckSpinner.css'; // Import CSS for styling
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
const CheckSpinner = ({ isLoading, isSuccess }) => {
  return (
    <div>
      <div className="check-spinner">
        {isLoading && <div className="spinner"></div>}
        {isSuccess && <div className="checkmark">
          <CheckCircleOutlinedIcon /></div>}
      </div>
    </div>
  );
};

export default CheckSpinner;
