import { useState, FormEvent } from 'react';
import {
    FormGroup,
    FormLabel,
    Select,
    MenuItem,
    Button,
    SelectChangeEvent,
} from '@mui/material';

const emojis =
    '😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺';

export default function EmojiForm() {
    const [emoji, setEmoji] = useState<string>('');
    const handleChange = (e: SelectChangeEvent): void => {
        setEmoji(e.target.value);
    };
    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <FormGroup onSubmit={handleSubmit}>
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
            <Button type='submit' variant='outlined' size='large'>
                Send
            </Button>
        </FormGroup >
    );
}
