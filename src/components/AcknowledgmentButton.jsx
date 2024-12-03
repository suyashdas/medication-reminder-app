import React from "react";
import { IonTable, IonRow, IonCol, IonLabel } from "@ionic/react";

const AdminDashboard = ({ logs }) => {
  return (
    <IonTable>
      <IonRow>
        <IonCol><IonLabel>User</IonLabel></IonCol>
        <IonCol><IonLabel>Medicine</IonLabel></IonCol>
        <IonCol><IonLabel>Status</IonLabel></IonCol>
        <IonCol><IonLabel>Timestamp</IonLabel></IonCol>
      </IonRow>
      {logs.map((log) => (
        <IonRow key={log.id}>
          <IonCol>{log.user_name}</IonCol>
          <IonCol>{log.medicine_name}</IonCol>
          <IonCol>{log.status}</IonCol>
          <IonCol>{log.timestamp}</IonCol>
        </IonRow>
      ))}
    </IonTable>
  );
};

export default AdminDashboard;
