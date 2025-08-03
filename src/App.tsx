import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Calculator />
    </FluentProvider>
  );
}

export default App;
