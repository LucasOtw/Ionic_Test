import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useIonRouter } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const router = useIonRouter(); 

  const goToTestPage = () => {
    router.push('/offre', 'forward', 'push');
  };

  const goToContactPage = () => {
    router.push('/contact', 'forward', 'push');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={goToTestPage}>Clique STP</IonButton>
        <IonButton onClick={goToContactPage}>Me contacter</IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
