const emojis =
    '😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺';

export default function EmojiForm() {
    return (
        <form>
            <label htmlFor='emoji'>Select your emoji</label>
            <select name='pets' id='pet-select'>
                {[...emojis].map((emoji: string, i: number) => (
                    <option
                        key={`emoji-${String(i).padStart(3, '0')}`}
                        value='emoji'
                    >
                        {emoji}
                    </option>
                ))}
            </select>
            <button>Verify</button>
            <input type='submit' value='Send' />
        </form>
    );
}
