import React from "react";

export default function ChiSiamo () {
    fetch('http://wordpress.test/wp-json/wp/v2/pages')
        .then(response => response.json())
        .then(pages => {

            console.log(pages[1])
            
            const body = document.getElementById('body-page');

            body.innerHTML = `
                <h1 class="text-center">${pages[1].title.rendered}</h1>
                <p>Donut jelly pudding candy canes liquorice sesame snaps powder tart danish. Halvah shortbread ice cream lemon drops candy fruitcake muffin. Jelly liquorice candy gummies gummies dessert apple pie chocolate bar chocolate bar.</p>
                <p>Sesame snaps lemon drops dragée lemon drops gingerbread jelly beans candy powder. Wafer apple pie halvah cookie tiramisu pudding cake sweet roll chocolate bar. Oat cake bear claw candy canes macaroon bonbon marshmallow gingerbread pudding muffin.</p>
                <p>Oat cake marzipan sugar plum caramels sugar plum carrot cake wafer gummies oat cake. Sesame snaps cake cake jelly jelly halvah dragée. Cake pudding topping soufflé tiramisu pie shortbread icing. Gummies sweet roll lollipop cupcake lemon drops marshmallow pastry.</p>
                <p>Danish chocolate cake fruitcake carrot cake gummi bears. Sweet cotton candy macaroon pudding jelly-o. Sweet shortbread sweet roll soufflé cupcake toffee candy gummies biscuit. Cheesecake sesame snaps caramels cake chocolate cake ice cream.</p>
                <p>Soufflé halvah biscuit marshmallow fruitcake chupa chups cheesecake. Cotton candy jujubes cake pie soufflé gummies icing chupa chups chocolate. Bear claw powder cake cotton candy fruitcake. Apple pie cookie cake bear claw gingerbread pudding bear claw.</p>
                <p>Tiramisu lollipop tiramisu cake chocolate cake cookie liquorice. Danish jelly-o sweet roll jujubes icing bear claw chocolate. Sweet chocolate cake toffee gummi bears dragée cheesecake fruitcake cupcake.</p>
            `
        })

    return (
        <div id="body-page" className="container">

        </div>
    )
}