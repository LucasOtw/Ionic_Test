// src/AppRoutes.tsx
import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import OffrePage from './pages/test'; 


const AppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={HomePage} exact={true} />
        <Route path="/offre" component={OffrePage} exact={true} />
        <Redirect from="/" to="/home" exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
