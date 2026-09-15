const jwt = require("jsonwebtoken");

const authArtist = async (req, res, next) => {
  // token nikalo
  const token = req.cookies.token;

  // token nahi aya to ye return krdo
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // agr token aya to usko verify kro
  try {
    // verify krne pe jo bhi obj aaega usme user ki id or role hai usko decoded variable dedo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    // role agr artist nhi hai to ye return krdo
    if (decoded.role !== "artist") {
      return res
        .status(403)
        .json({ message: "You don't have access to this route" });
    }

    // decode ke andr jo data ara hai use hum user naam ki property me save krrahehai
    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

const authUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    // verify krne pe jo bhi obj aaega usme user ki id or role hai usko decoded variable assign krdo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    // role agr artist nhi hai to ye return krdo
    if (decoded.role !== "user" && decoded.role !== "artist") {
      return res
        .status(403)
        .json({ message: "You don't have access to this route" });
    }

    // decode ke andr jo data ara hai use hum user naam ki property me save krrahehai
    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authArtist, authUser };
