import React from 'react';
import './core.css';
// import { helloWorld } from '@storybook-issue/hello-world';
import { IonApp, IonContent, IonPage } from '@ionic/react';

/* eslint-disable-next-line */
export interface CoreProps {}

export const Core = (props: CoreProps) => {
  return (
    <IonApp>
      <IonPage id="main">
        Hello world!!!
        {/* <IonContent>{helloWorld()}</IonContent> */}
      </IonPage>
    </IonApp>
  );
};

export default Core;
