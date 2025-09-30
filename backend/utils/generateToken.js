import jwt from "jsonwebtoken";

const generateToken = ({ id, name, email, role }) => {
    return jwt.sign({ id, email, name, role }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

export default generateToken;
