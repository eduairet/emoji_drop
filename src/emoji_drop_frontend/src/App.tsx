import { Container, Divider, Paper } from '@mui/material';
import EmojiForm from './components/EmojiForm';
import Title from './components/Title';
import TopEmoji from './components/TopEmoji';

function App() {
    return (
        <Container maxWidth="xs">
            <Paper elevation={8}>
                <Title />
                <Divider />
                <EmojiForm />
                <Divider />
                <TopEmoji />
            </Paper>
        </Container>
    );
}

export default App;
