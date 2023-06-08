import { useEffect, useState, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ICContext } from '../store/ic-context';



export default function TopEmoji() {
    const icCtx = useContext(ICContext);

    return (
        <Box marginBottom={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Typography variant='h3'>Top Emoji</Typography>
            <Typography variant='h2' sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Noto Color Emoji', sans-serif",
                width: 100,
                height: 100,
                fontSize: '3.5rem',
                borderRadius: '50%',
                borderStyle: 'solid',
                borderColor: '#666',
                borderWidth: '5px',
                outline: 'none',
                boxShadow: `0 0.25rem 0 0 #666`,
            }}>
                {icCtx ? icCtx.topEmoji[0] : null}
            </Typography>
        </Box>
    );
}
