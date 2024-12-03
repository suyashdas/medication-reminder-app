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
} from "@ionic/react";
import "../styles/AdminPage.css";

const AdminPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="admin-content">
        <h2 className="section-title">Acknowledgment Logs</h2>
        <IonList>
          <IonItem className="log-item">
            <IonLabel>
              <h3>Patient: John Doe</h3>
              <p>Medicine 1 taken at 8:05 AM</p>
            </IonLabel>
          </IonItem>
          <IonItem className="log-item">
            <IonLabel>
              <h3>Patient: Jane Smith</h3>
              <p>Medicine 2 taken at 12:10 PM</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AdminPage;
