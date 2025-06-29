import styled from "@emotion/styled";
import "@fontsource/inter";
import "@fontsource/inter/700.css";
import "@fontsource/inter/300.css";
import Home from './pages/Home/Home';
const AppWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #FFFFF0;
    font-family: 'Inter', sans-serif;
`
function App() {
    return (
        <AppWrapper>
            <Home/>
        </AppWrapper>
    )
}

export default App
