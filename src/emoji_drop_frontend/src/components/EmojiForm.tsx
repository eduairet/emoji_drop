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
    const [emoji, setEmoji] = useState<string>(''),
        icCtx = useContext(ICContext),
        handleChange = (e: SelectChangeEvent): void => {
            setEmoji(e.target.value);
        },
        handleSubmit = async (e: FormEvent): Promise<void> => {
            console.log('Sending');
            e.preventDefault();
            try {
                const request = await emoji_drop_backend.sendEmoji(`${emoji}`);
                icCtx?.checkTopEmoji();
                alert(request);
            } catch (err) {
                alert(err);
            }
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
            <Button variant='outlined' color='secondary' size='small'>
                Verify
            </Button>
            <Button type='submit' variant='outlined' size='large' onClick={handleSubmit}>
                Send
            </Button>
        </FormGroup >
    );
}
