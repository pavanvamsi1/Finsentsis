import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
},
{
    timestamps: true
}
);

// Indexing
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

const User = mongoose.model("User", userSchema);

export default User;