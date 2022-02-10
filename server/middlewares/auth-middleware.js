const firebase = require("../firebase/firebase-init");

function authMiddleware(request, response, next) {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response.status(401).json({
      "errors": [{
        "value": headerToken,
        "msg": "Unauthorized access to the server",
        "param": "auth-token",
        "location": "header"
      }]
    });
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    response.status(401).json({
      "errors": [{
        "value": headerToken,
        "msg": "Invalid format of token from the user",
        "param": "auth-token",
        "location": "header"
      }]
    });;
  }

  let details=null;
  const token = headerToken.split(" ")[1];
  firebase
    .auth()
    .verifyIdToken(token)
    .then((detail) =>{ req.details=detail;console.log(details);next();})
    .catch(() => response.status(401).json({
      "errors": [{
        "value": headerToken,
        "msg": "Unauthorized access from the user",
        "param": "auth-token",
        "location": "header"
      }]
    }));
}

module.exports = authMiddleware;