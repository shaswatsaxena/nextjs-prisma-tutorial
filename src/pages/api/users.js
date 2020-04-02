import bcrypt from "bcryptjs";
import prisma from "../../../prisma/client";

export default async (req, res) => {
  if (req.method === "POST") {
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const newUser = await prisma.users.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: passwordHash
      }
    });
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(newUser));
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({}));
  }
};
