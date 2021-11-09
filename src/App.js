import {ThemeProvider} from 'styled-components/macro';
import AppTheme from './theme';
import GlobalStyle from './styles/globalStyles';
import Search from './components/search';
import styled from 'styled-components/macro';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Container>
        <Search />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

const Container = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;

export default App;
