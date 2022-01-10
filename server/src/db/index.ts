import mongoose from "mongoose";

const connection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Banco de dados conectado!");
    })
    .catch((err) => {
      console.error("Error: " + err.stack);
      process.exit(1);
    });
};

export default connection;
