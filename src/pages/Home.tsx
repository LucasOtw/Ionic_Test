import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/Contact.tsx');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={handleClick}>Clique STP</IonButton>
        <IonButton onClick={}>Me contacter</IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
