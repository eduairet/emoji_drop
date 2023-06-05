import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

export default function TopEmoji() {
    const [topEmoji, setTopEmoji] = useState<string>('');
    const fetchTopEmoji = async () => {
        setTopEmoji('😎');
    };

    useEffect(() => {
        fetchTopEmoji();
    }, []);

    return (
        <>
            <Typography variant='h2'>Top Emoji</Typography>
            <Typography variant='h2'>{topEmoji}</Typography>
        </>
    );
}
