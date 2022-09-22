import React from 'react';
import PageHeader from '@twitter/feather-component-page-header-react';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <PageHeader>React App</PageHeader>
      <div className={styles.content}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
