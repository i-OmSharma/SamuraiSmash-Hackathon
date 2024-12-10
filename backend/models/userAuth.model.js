import mongoose, {Schema} from "mongoose"

const userAuthSchema = new Schema(
    {
        firebaseUid: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        userName: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String, // Store hashed password if needed
          }
    }, {timestamps: true})

export const UserAuth = mongoose.model("UserAuth", userAuthSchema)