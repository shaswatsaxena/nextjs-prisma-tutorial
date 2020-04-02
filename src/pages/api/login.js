import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../../prisma/client";

export default async (req, res) => {
  if (req.method === "POST") {
    const user = await prisma.users.findOne({
      where: { email: req.body.email }
    });
    if (!user) {
      res.statusCode = 401;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Invalid Email" }));
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.statusCode = 401;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Invalid Password" }));
    }
    const token = await jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      "secretString"
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ token }));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({}));
  }
};