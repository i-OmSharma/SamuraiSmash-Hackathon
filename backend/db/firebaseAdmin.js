import admin from "firebase-admin"
import serviceAccount from "../config/dumb-deaf-firebase-adminsdk-88qen-bd746675ad.json" with {type: 'json'}

//Firebase Admin

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  
export default admin;