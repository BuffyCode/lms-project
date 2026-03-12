import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    //data definitions 
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["instructor", "student"],
        default: "student",
    },
    enrolledCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    photoUrl: {
        type: String,
        default: "",
    }
}, {
    //schema configuration / schema options
    //for automation : how ? mongoose will automatically take care of time updation here, when the user was created or updated
    timestamps: true,
})
export const User = mongoose.model("user", userSchema)