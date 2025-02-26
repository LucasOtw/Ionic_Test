import React from 'react';
import { IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonContent, IonText } from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { IonButton } from '@ionic/react';
import './test.css';  // Pour le CSS personnalisé

const Offre: React.FC = () => {
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
            <p>☀️ Ensoleiller</p>
            <p>🌡️ Chaud</p>
            <p>👷‍♂️ 1.6mio Habs</p>
          </div>
        </IonText>

        <IonText>
        <div className='more_detail'>
          <h4>Je crée mon voyage</h4>
          <p>Tu peux créer ici ton voyage en 1 minute, c'est automatique, notre algorithme fait tout pour toi.</p>
          </div>
        </IonText>
       

        <IonButton className='button_create'>Créer 🚀</IonButton>
      </IonContent>
    </>
  );
}

export default Offre;