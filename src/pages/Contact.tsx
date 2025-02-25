import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const FanMoon: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fan Moon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Bienvenue sur la page Fan Moon !</p>
      </IonContent>
    </IonPage>
  );
};

export default FanMoon;
