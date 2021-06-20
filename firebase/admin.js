import admin from "firebase-admin";

const serviceAccount = {
    type: 'service_account',
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    projectId: process.env.FIREBASE_PROJECT_ID
};

// Initialize Firebase
if (!admin.apps.length) {
    try {
        admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    } catch (error) {
        console.log('Firebase admin initialization error', error.stack);
    }
}

const db = admin.firestore();
export { db };

