export function renderLoginComponent( { appEl, setToken, fetchTodosAndRender } ) {
    const appHtml = `
        <h1>Список задач</h1>
        <div class="form">
        <h3 class="form-title">Форма входа</h3>
        <div class="form-row">
            Логин
            <input type="text" id="login-input" class="input" />
            <br />
            Пароль
            <input type="text" id="login-input" class="input" />
        </div>
        <br />
        <button class="button" id="login-button">Войти</button>
    `;

    appEl.innerHTML = appHtml;

    document.getElementById('login-button').addEventListener('click', () => {

    setToken("Bearer 94b8bwbkc8bo6g5g5k5o5s5w60686c5c6g94asbwbkdgc4dkbkasc8");
    
    fetchTodosAndRender();

    })
}