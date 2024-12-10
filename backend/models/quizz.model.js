import mongoose, {Schema} from "mongoose";

const quizScoreModel = new Schema(
    {
        userData:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserData",
            required: true
        },
        quizId: {
            type: Schema.Types.ObjectId,
            ref: 'Lesson',
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        completedAt: {
            type: Date,
            default: Date.now
        }
    }, {timestamps: true}
)

export const QuizScore = mongoose.model("QuizScore", quizScoreSchema);