import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nos offres</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Nos offres de voyages</p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer Toolbar</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Contact;