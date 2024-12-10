import mongoose, { Schema } from "mongoose";

const lessonSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        completedAt: {
            type: Date,
            default: null //data of completion of the lesson
        }
    },
    { timestamps: true } 
);


export const Lesson = mongoose.model("Lesson", lessonSchema);
