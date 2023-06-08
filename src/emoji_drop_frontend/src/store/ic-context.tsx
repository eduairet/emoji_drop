import { ReactNode, createContext, useEffect, useState } from 'react';
import { emoji_drop_backend } from '../../../declarations/emoji_drop_backend';

interface ICContextValue {
    topEmoji: [string, bigint];
    checkTopEmoji: () => void;
}
interface ProviderProps {
    children: ReactNode;
}

export const ICContext = createContext<ICContextValue | undefined>(undefined);

export const ICContextProvider = (props: ProviderProps) => {
    const [topEmoji, setTopEmoji] = useState<[string, bigint]>(['', BigInt(0)]),
        checkTopEmoji: () => void = async () => {
            try {
                const response: [string, bigint] = await emoji_drop_backend.topEmoji();
                console.log('Top emoji:', response);
                setTopEmoji(response);
            } catch (error) {
                console.error('Error fetching top emojis:', error);
            }
        };

    useEffect(() => {
        checkTopEmoji();
    }, []);

    return (
        <ICContext.Provider value={{ topEmoji, checkTopEmoji }}>
            {props.children}
        </ICContext.Provider>
    );
};
