import { useEffect, useState } from 'react';

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
            <h2>Top Emoji</h2>
            <h2>{topEmoji}</h2>
        </>
    );
}
