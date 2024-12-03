import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import "../styles/PatientPage.css";

const PatientPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Patient Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="patient-content">
        <h2 className="section-title">Today's Medications</h2>
        <IonList>
          <IonItem className="medicine-item">
            <IonLabel>
              <h3>Medicine 1</h3>
              <p>Take 2 pills at 8:00 AM</p>
            </IonLabel>
            <IonButton className="mark-button">Mark Taken</IonButton>
          </IonItem>
          <IonItem className="medicine-item">
            <IonLabel>
              <h3>Medicine 2</h3>
              <p>Take 1 pill at 12:00 PM</p>
            </IonLabel>
            <IonButton className="mark-button">Mark Taken</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PatientPage;
