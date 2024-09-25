function renderizarLogin(request, response) {
    response.render('login');
}
function autenticarUsuario(request, response) {
    const { email, password } = request.body

    console.log(email, password);

    if (email === "admin@admin.com" && password === "admin") {

        // Salvar a sessão do usuario
        request.session.usuario = {
            email: email
        }

        response.redirect("/dashboard")
    } else {
        console.log("Usuário ou senha inválida")
    }
}
function deslogarUsuario(request, response){
    request.session.destroy();
    response.redirect("/");
}

module.exports = {
    renderizarLogin,
    autenticarUsuario,
    deslogarUsuario
}