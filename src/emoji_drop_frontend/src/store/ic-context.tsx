import { ReactNode, createContext, useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { AuthClient } from '@dfinity/auth-client';
import { emoji_drop_backend } from '../../../declarations/emoji_drop_backend';

interface ICContextValue {
    topEmoji: [string, bigint];
    verified: boolean;
    checkTopEmoji: () => void;
    verifyIdentity: () => void;
}
interface ProviderProps {
    children: ReactNode;
}

export const ICContext = createContext<ICContextValue | undefined>(undefined);

export const ICContextProvider = (props: ProviderProps) => {
    const [topEmoji, setTopEmoji] = useState<[string, bigint]>(['', BigInt(0)]),
        [verified, setVerified] = useState<boolean>(false),
        checkTopEmoji: () => void = async () => {
            try {
                const response: [string, bigint] = await emoji_drop_backend.topEmoji();
                setTopEmoji(response);
            } catch (error) {
                console.error('Error fetching top emojis:', error);
            }
        },
        verifyIdentity: () => void = async () => {
            const authClient: AuthClient = await AuthClient.create(),
                login: any = await authClient.login({ onSuccess: async (): Promise<Principal> => await authClient.getIdentity().getPrincipal() });
            console.log(login);
            setVerified(true);
        };


    useEffect(() => {
        checkTopEmoji();
    }, []);

    return (
        <ICContext.Provider value={{ topEmoji, verified, checkTopEmoji, verifyIdentity }}>
            {props.children}
        </ICContext.Provider>
    );
};
