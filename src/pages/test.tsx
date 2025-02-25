import React from 'react';
import { IonCard, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './test.css';  // Pour le CSS personnalisé

const Example: React.FC = () => {
  return (
    <>
      <IonCard className="custom-card">
        <div className="card-image-container">
          <img alt="Image d'offre" src="/assets/images/Barcelone.jpg" className="card-image" />
          <div className="card-image-overlay"></div>
        </div>
        <IonCardContent className="card-text-content">
        <div className='tag-container'>
          <IonCardSubtitle className='tag-card'>Populaire 🔥</IonCardSubtitle>
          </div>
          <IonCardTitle>Barcelone</IonCardTitle>
          <IonCardSubtitle>Espagne 🇪🇸</IonCardSubtitle>
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default Example;