import React from "react";

export default function Contatti() {
    fetch('http://wordpress.test/wp-json/wp/v2/pages')
        .then(response => response.json())
        .then(pages => {

            console.log(pages[0])
            
            const body = document.getElementById('body-page');

            body.innerHTML = `
                <h1 class="mb-2 mt-3 text-center">${pages[0].title.rendered}</h1>
                <div class="row">
                    <form action="/action_page.php" class="col">
                        <h2>Scrivici</h2>
                        <fieldset>
                            <input type="text" class="form-control mb-3" placeholder="Nome e Cognome" required style="width: 90%">
                            <input type="text" class="form-control mb-3" placeholder="Email" required style="width: 90%">
                            <input type="text" class="form-control mb-3" placeholder="Oggetto" required style="width: 90%">
                            <input type="text" class="form-control mb-3" placeholder="Scrivi il tuo messaggio" style="width: 90%">
                        </fieldset>
                        <button class="btn btn-dark">Invia il messaggio</button>
                    </form>
                    <div class="col">
                        <h2>Sede</h2>
                        <address>
                            Via Libetta 1 <br>
                            00100 Roma (RM)
                        </address>
                        <address>
                            <a href="#">assistenza.blog@noncliccare.com</a> <br>
                            +39 1234567
                        </address>
                        <h2>Lavora con noi</h2>
                        <p>Per poterti candidare ad un ruolo da ammministratore invia il tuo CV a <a href="#">diventanostroschiavo.blog@noncliccare.com</a></p>
                    </div>
                </div>
            `
        })

    return (
        <div id="body-page" className="container">
            
        </div>
    )
}