import admin from "../db/firebaseAdmin";

export const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(400).json({ error: 'No token provided'})
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token)
        req.user = decodedToken
        next()
    } catch (error) {
        console.error('Error verify token', error)
        res.status(400).json({error: Unauthorized})
    }
}
