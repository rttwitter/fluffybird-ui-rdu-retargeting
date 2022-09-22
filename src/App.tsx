import * as React from 'react';
import Button from '@twitter/feather-component-button-react';
import Grid from '@twitter/feather-component-grid-react';
import Module from '@twitter/feather-component-module-react';
import PageHeader from '@twitter/feather-component-page-header-react';
import styles from './App.module.css';

// Based on http://go/feather/docs/page-templates
class App extends React.Component {
  render() {
    return (
      <div className={styles.page}>
        <nav className={styles.nav}>
          <h3>Feather page template</h3>
        </nav>

        <PageHeader
          endChildren={
            <React.Fragment>
              <Button>Secondary button</Button>
              <Button appearance="primary">Primary button</Button>
            </React.Fragment>
          }
        >
          Dashboard
        </PageHeader>

        <div className={styles.main}>
          <div className={styles.container}>
            <Grid withGutter>
              <Grid.Cell size="2/3">
                <Module className={styles.module}>
                  <Module.Header titleChildren="Header" />
                  <Module.Body>
                    <p className={styles.chart}>Content placeholder</p>
                  </Module.Body>
                </Module>
              </Grid.Cell>

              <Grid.Cell size="1/3">
                <Module className={styles.module}>
                  <Module.Header titleChildren="Header" />
                  <Module.Body>
                    <p className={styles.chart}>Content placeholder</p>
                  </Module.Body>
                </Module>
              </Grid.Cell>

              <Grid.Cell size="1/3">
                <Module className={styles.module}>
                  <Module.Header titleChildren="Header" />
                  <Module.Body>
                    <p className={styles.chart}>Content placeholder</p>
                  </Module.Body>
                </Module>
              </Grid.Cell>

              <Grid.Cell size="1/3">
                <Module className={styles.module}>
                  <Module.Header titleChildren="Header" />
                  <Module.Body>
                    <p className={styles.chart}>Content placeholder</p>
                  </Module.Body>
                </Module>
              </Grid.Cell>

              <Grid.Cell size="1/3">
                <Module className={styles.module}>
                  <Module.Header titleChildren="Header" />
                  <Module.Body>
                    <p className={styles.chart}>Content placeholder</p>
                  </Module.Body>
                </Module>
              </Grid.Cell>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
