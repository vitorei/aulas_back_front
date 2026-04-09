import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/cadastro", (req, res) => {
    const { nome, email, senha } = req.body;

    const sql = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)";
    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Erro ao cadastrar usuário" });
        }
        res.json({ message: "Cadastro realizado com sucesso!" });
    });
});
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_db"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Conectado ao MySQL do XAMPP!");
});
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});