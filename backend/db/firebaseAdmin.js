import admin from "firebase-admin"
import serviceAccount from "../config/dumb-deaf-firebase-adminsdk-88qen-02e01bdc38.json"

//Firebase Admin

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  
export default admin;