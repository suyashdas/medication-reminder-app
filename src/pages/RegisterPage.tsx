import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import "../styles/RegisterPage.css";

const RegisterPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="register-content">
        <IonCard className="register-card">
          <IonCardContent>
            <h1 className="form-title">Create an Account</h1>
            <p className="form-subtitle">Sign up to get started</p>
            <IonInput
              placeholder="Name"
              type="text"
              className="input-field"
              clearInput
            />
            <IonInput
              placeholder="Email Address"
              type="email"
              className="input-field"
              clearInput
            />
            <IonInput
              placeholder="Password"
              type="password"
              className="input-field"
              clearInput
            />
            <IonButton expand="block" className="primary-button">
              Sign Up
            </IonButton>
            <p className="form-footer">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
