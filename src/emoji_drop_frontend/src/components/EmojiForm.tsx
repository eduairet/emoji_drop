import { useState, useContext, FormEvent } from 'react';
import {
    FormGroup,
    FormLabel,
    Select,
    MenuItem,
    Button,
    SelectChangeEvent,
} from '@mui/material';
import { emoji_drop_backend } from '../../../declarations/emoji_drop_backend';
import { ICContext } from '../store/ic-context';

const emojis =
    '😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺';

export default function EmojiForm() {
    const icCtx = useContext(ICContext),
        [emoji, setEmoji] = useState<string>(''),
        [isLoading, setIsLoading] = useState<boolean>(false),
        [isVerifying, setIsVerifying] = useState<boolean>(false),
        handleVerify = async (): Promise<void> => {
            setIsVerifying(true);
            try {
                icCtx?.verifyIdentity();
            } catch (err: Error | any) {
                alert(`There was an error with your identity: ${err.message}`);
            }
            setIsVerifying(false);
        },
        handleChange = (e: SelectChangeEvent): void => {
            setEmoji(e.target.value);
        },
        handleSubmit = async (e: FormEvent): Promise<void> => {
            setIsLoading(true);
            e.preventDefault();
            try {
                if (!emoji || !emojis.includes(emoji)) {
                    throw new Error('Invalid emoji');
                }
                const request = await emoji_drop_backend.sendEmoji(`${emoji}`);
                icCtx?.checkTopEmoji();
                setEmoji('');
                alert(`${request[0]} added!`);
            } catch (err: Error | any) {
                alert(`There was an error with your request: ${err.message}`);
            }
            setIsLoading(false);
        };

    return (
        <FormGroup>
            <FormLabel id='emoji-label'>Select your emoji</FormLabel>
            <Select
                labelId='emoji-label'
                id='emoji'
                label='Emoji'
                value={emoji}
                onChange={handleChange}
                inputProps={{ IconComponent: () => null, sx: { padding: '0 !important' } }}
            >
                {[...emojis].map((em: string, i: number) => (
                    <MenuItem
                        key={`emoji-${String(i).padStart(3, '0')}`}
                        value={em}
                    >
                        {em}
                    </MenuItem>
                ))}
            </Select>
            <Button variant='outlined' color='secondary' size='small' onClick={handleVerify} disabled={isVerifying || icCtx?.verified}>
                {isVerifying ? 'Wait...' : 'Verify'}
            </Button>
            <Button type='submit' variant='outlined' size='large' onClick={handleSubmit} disabled={isLoading || !icCtx?.verified}>
                {isLoading ? 'Wait...' : 'Send'}
            </Button>
        </FormGroup >
    );
}
