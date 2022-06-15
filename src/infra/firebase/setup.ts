import { initializeApp } from 'firebase/app'

// eslint-disable-next-line import/no-unresolved
import { initializeApp as initializeAppAdmin, applicationDefault } from 'firebase-admin/app'

const makeFirebaseSetupFactory = () => {
  const firebaseAppAdmin = initializeAppAdmin({
    credential: applicationDefault(),
    databaseURL: 'https://test-a1d14-default-rtdb.firebaseio.com',
  })

  const firebaseConfig = {
    apiKey: 'AIzaSyDF05fn_C04-AtAtvM9X5hp3ny_js8DrUk',
    authDomain: 'test-a1d14.firebaseapp.com',
    projectId: 'test-a1d14',
    storageBucket: 'test-a1d14.appspot.com',
    messagingSenderId: '287339296595',
    appId: '1:287339296595:web:73090e1c8d0f1e2efcd3a6',
  }

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig)

  return {
    firebaseApp,
    firebaseAppAdmin,
  }
}

export default makeFirebaseSetupFactory
