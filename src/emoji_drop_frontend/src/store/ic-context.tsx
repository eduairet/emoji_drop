import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { emoji_drop_backend } from '../../../declarations/emoji_drop_backend'; // Replace with your actual declaration file

interface ICContextValue {
    topEmoji: [string, bigint];
}

export const ICContext = createContext<ICContextValue | undefined>(undefined);

export const ICContextProvider: React.FC = ({ children }: PropsWithChildren) => {
    const [topEmoji, setTopEmoji] = useState<[string, bigint]>(['', BigInt(0)]);

    useEffect(() => {
        const fetchTopEmoji = async () => {
            try {
                const response: [string, bigint] = await emoji_drop_backend.topEmoji();
                setTopEmoji(response);
            } catch (error) {
                console.error('Error fetching top emojis:', error);
            }
        };

        fetchTopEmoji();
    }, []);

    const contextValue: ICContextValue = {
        topEmoji,
    };

    return (
        <ICContext.Provider value={contextValue}>
            {children}
        </ICContext.Provider>
    );
};
