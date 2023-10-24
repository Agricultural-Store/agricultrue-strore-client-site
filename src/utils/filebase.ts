import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: "AIzaSyCIO9jG5blVS_IoX6uWhAnVH1q_WC6dGxE",
        authDomain: "huong-gao-que.firebaseapp.com",
        projectId: "huong-gao-que",
        storageBucket: "huong-gao-que.appspot.com",
        messagingSenderId: "138120941176",
        appId: "1:138120941176:web:54fead20d0fb9c2dfde78d",
        measurementId: "G-1RH509KMH0",
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken();

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
