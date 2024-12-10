import mongoose, { Schema } from "mongoose";


const progressSchema = new Schema(
    {
        userData: {
            type: Schema.Types.ObjectId,
            ref: 'UserData',
            required: true
        },
        completedLessons: [{
            type: Schema.Types.ObjectId,
            ref: 'Lesson'
        }],
        totalQuizScore: {
            type: Number,
            default: 0
        },
        totalGameScore: {
            type: Number,
            default: 0
        },
        progressUpdatedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);


export const Progress = mongoose.model("Progress", progressSchema);
