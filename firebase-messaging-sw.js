// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyAUkdW0ZkVK-Z9biPEIwK2bL0tmj-tDdME",
    authDomain: "test-chat-7dc49.firebaseapp.com",
    databaseURL: "https://test-chat-7dc49.firebaseio.com",
    projectId: "test-chat-7dc49",
    storageBucket: "test-chat-7dc49.appspot.com",
    messagingSenderId: "602278096682"
};

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});