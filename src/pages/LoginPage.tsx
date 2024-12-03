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
import "../styles/LoginPage.css";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login-content">
        <IonCard className="login-card">
          <IonCardContent>
            <h1 className="form-title">Welcome Back!</h1>
            <p className="form-subtitle">Log in to continue</p>
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
              Log In
            </IonButton>
            <p className="form-footer">
              Don’t have an account? <a href="/register">Sign up</a>
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
