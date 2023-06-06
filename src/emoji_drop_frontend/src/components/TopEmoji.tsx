import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function TopEmoji() {
    const [topEmoji, setTopEmoji] = useState<string>('');
    const fetchTopEmoji = async () => {
        setTopEmoji('😎');
    };

    useEffect(() => {
        fetchTopEmoji();
    }, []);

    return (
        <Box>
            <Typography variant='h3'>Top Emoji</Typography>
            <Typography variant='h2'>{topEmoji}</Typography>
        </Box>
    );
}
