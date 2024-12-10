import mongoose, {Schema} from "mongoose";

const userDataSchema = new Schema(
    {
        userAuth: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserAuth",
            required: true
        },
        quizScores: [{
            type: Schema.Types.ObjectId,
            ref: 'QuizScore'
        }],
        gameScores: [{
            type: Schema.Types.ObjectId,
            ref: 'GameScore'
        }],
        lessonsCompleted: [{
            type: Schema.Types.ObjectId,
            ref: 'Lesson'
        }]
    }, {timestamps:true})

export const UserData = mongoose.model("UserData", userDataSchema)