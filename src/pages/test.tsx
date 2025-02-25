import React from 'react';
import { IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonContent, IonText } from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import './test.css';  // Pour le CSS personnalisé

const Example: React.FC = () => {
  return (
    <>
      <IonCard className="custom-card">
        <div className="card-image-container">
          <img alt="Image d'offre" src="/assets/images/Barcelone.jpg" className="card-image" />
          <div className="card-image-overlay"></div>
        </div>

        <IonCardContent className="card-text-save">
          <div className="card-image-save">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </IonCardContent>
        <IonCardContent className="card-text-content">
          <div className='tag-container'>
            <IonCardSubtitle className='tag-card'>Populaire 🔥</IonCardSubtitle>
          </div>
          <IonCardTitle>Barcelone</IonCardTitle>
          <IonCardSubtitle>Espagne 🇪🇸</IonCardSubtitle>
        </IonCardContent>
      </IonCard>

      <IonContent>
        <IonText>
          <div className='detail_city'>
            <p>Ensoleiller</p>
            <p>Chaud</p>
            <p>1.6mio Hab</p>
          </div>
        </IonText>
      </IonContent>
    </>
  );
}

export default Example;