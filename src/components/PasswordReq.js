import { Typography } from '@mui/material'
import SecurityIcon from '@mui/icons-material/Security'
import { red } from '@mui/material/colors'

export default function PasswordReq() {
    return (
        <>
            <Typography sx={{ fontSize: 11, ml: 3 }} variant='caption' color='text.secondary' >
                <SecurityIcon sx={{ fontSize: 14, color: red[800], mt: 1 }} />
                Password Requirements (minimum 8 characters):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;At least 1 number, 1 lowercase letter, 1 uppercase letter, 1 symbol
            </Typography>
        </>
    )
}

