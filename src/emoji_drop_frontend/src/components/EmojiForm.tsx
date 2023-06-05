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
    const [emoji, setEmoji] = useState('');
    const handleChange = (emoji: string): void => {
        setEmoji(emoji);
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
                onChange={(e: SelectChangeEvent): void =>
                    handleChange(e.target.value)
                }
            >
                {[...emojis].map((emoji: string, i: number) => (
                    <MenuItem
                        key={`emoji-${String(i).padStart(3, '0')}`}
                        value='emoji'
                    >
                        {emoji}
                    </MenuItem>
                ))}
            </Select>
            <Button variant='outlined' color='secondary' size='small'>
                Verify
            </Button>
            <Button type='submit' variant='outlined' size='large'>
                Send
            </Button>
        </FormGroup>
    );
}
