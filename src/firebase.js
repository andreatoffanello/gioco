import { initializeApp } from 'firebase/app';

export const initializeReactApp = () => {
    const config = {
        apiKey: "AIzaSyBz-69fUd2umi_wFKaQz8jDFwb_bxLwiSM",
        authDomain: "maddipod-1c1ca.firebaseapp.com",
        databaseURL: "https://maddipod-1c1ca.firebaseio.com",
        projectId: "maddipod-1c1ca",
        storageBucket: "maddipod-1c1ca.appspot.com",
        messagingSenderId: "1055954508324",
        appId: "1:1055954508324:web:caaf9fbc2387cae78c96b1"
    };

    initializeApp(config);
}
