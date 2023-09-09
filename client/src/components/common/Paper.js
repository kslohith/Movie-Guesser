import Paper from '@mui/material/Paper';
import variables from '../../styles/global.scss';
import CustomTypography from './Typography';

const CustomPaper = ({ children, sx, header, headerSx, className }) => (
  <Paper
    sx={{ mt: 2, borderRadius: variables['border-radius'], ...sx }}
    variant="outlined"
    className={className}
  >
    {header && (
      <CustomTypography
        className="custom-paper-header"
        component="h2"
        variant="h6"
        sx={{ fontWeight: 600, ...headerSx }}
      >
        {header}
      </CustomTypography>
    )}
    {children}
  </Paper>
);

export default CustomPaper;
