import { GlobalStyle } from 'assets/styles/globalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <GlobalStyle />
            <App />
    </React.StrictMode>,
);
