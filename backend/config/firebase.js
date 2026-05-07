const admin = require('firebase-admin');
require('dotenv').config();

// Initialize with mock config or real config if available
// For real deployment, use service account credentials
try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Replace literal \n with actual newlines
      privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
    }),
  });
  console.log('Firebase Admin initialized successfully');
} catch (error) {
  console.warn('Firebase Admin initialization failed or using mock DB. Please provide valid service account details.', error.message);
  // Optional: Init a dummy app for local dev if needed without credentials
  if (!admin.apps.length) {
     admin.initializeApp();
  }
}

const db = admin.firestore();
const auth = admin.auth();

module.exports = { admin, db, auth };
