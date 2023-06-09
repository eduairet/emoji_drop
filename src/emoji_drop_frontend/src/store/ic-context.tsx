import { ReactNode, createContext, useEffect, useState } from 'react';
import { AuthClient } from "@dfinity/auth-client"
import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { emoji_drop_backend } from '../../../declarations/emoji_drop_backend';
import { createActor } from '../../../declarations/emoji_drop_backend';

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
        verifyIdentity: () => Promise<void> | undefined = async () => {
            try {
                let actor: Actor = emoji_drop_backend;
                const authClient: AuthClient = await AuthClient.create();
                await new Promise((resolve): void => {
                    authClient.login({
                        identityProvider: process.env.II_URL,
                        onSuccess: resolve as (() => void) | (() => Promise<void>) | undefined,
                    });
                });
                const identity: Identity = authClient.getIdentity();
                const agent: HttpAgent = new HttpAgent({ identity });
                actor = createActor(process.env.EMOJI_DROP_BACKEND_CANISTER_ID || '', {
                    agent,
                });
                console.log(actor);
                setVerified(true);
            } catch (err) {
                setVerified(false);
            }
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
