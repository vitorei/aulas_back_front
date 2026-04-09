//troca de cadastro
function mostrarCadastro() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("cadastroForm").style.display = "block";
}

function mostrarLogin() {
    document.getElementById("cadastroForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
//pegando o valor do cadastro
const loginForm = document.getElementById("loginForm");
const cadastroForm = document.getElementById("cadastroForm");

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    try {
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        });

        const data = await res.json();
        alert(data.message);
    } catch (err) {
        console.error(err);
        alert("Erro ao conectar com a API");
    }
});

//pegando valor dos input

cadastroForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    const nome = document.getElementById("cadastroNome").value;
    const email = document.getElementById("cadastroEmail").value;
    const senha = document.getElementById("cadastroSenha").value;

    try {
        const res = await fetch("http://localhost:3000/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email, senha })
        });

        const data = await res.json();
        alert(data.message);
    } catch (err) {
        console.error(err);
        alert("Erro ao conectar com a API");
    }
});