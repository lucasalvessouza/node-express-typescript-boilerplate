import { Response, NextFunction } from 'express'
import { getAuth as getAuthAdmin } from 'firebase-admin/auth'


export const accessTokenAuthentication = async (
  request: any, response: Response, next: NextFunction) => {
  try {
    const { authorization } = request.headers;
    if (authorization?.split(' ')[0] !== 'Bearer') {
      return response.status(401).send('Unauthorized');
    }
    const authToken = authorization.split(' ')[1];
    const decodedToken = await getAuthAdmin().verifyIdToken(authToken)
    request.user = decodedToken;
    next();
  } catch (error) {
    response.status(401).send('Unauthorized');
  }
}