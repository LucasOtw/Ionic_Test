import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const Home: React.FC = () => {
  const history = useHistory();

  const navigateToTest = () => {
    history.push('/test');
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
        <IonButton onClick={navigateToTest}>Clique STP</IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;