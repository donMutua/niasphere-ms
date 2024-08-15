import expressApp from "./express-app";

const PORT = process.env.PORT || 9000;

export const StartServer = async () => {
  expressApp.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    console.error("Uncaught exception", err);
    process.exit(1);
  });
};

StartServer().then(() => {
  console.log("Server started");
});
