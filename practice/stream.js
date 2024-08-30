import express from "express";
import { createReadStream } from "fs"; // Using the standard `fs` module for creating a read stream
import monitor from "express-status-monitor";

export default () => {
  const app = express();
  app.use(monitor());
  const port = process.env.PORT || 3003;

  app.get("/", (req, res) => {
    const filePath = "./example.txt"; // Ensure this path is correct

    // Set the content-type to text/plain with UTF-8 encoding
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    try {
      const stream = createReadStream(filePath, { encoding: "utf-8" });

      stream.on("data", (chunk) => {
        res.write(chunk);
      });

      stream.on("end", () => {
        res.end();
      });

      stream.on("error", (error) => {
        console.error("Error streaming the file:", error);
        res.status(500).send("An error occurred while streaming the file.");
      });
    } catch (error) {
      console.error("Error reading the file:", error);
      res.status(500).send("An error occurred while reading the file.");
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
