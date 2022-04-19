import React from "react";

export default function Posts () {
    fetch('http://wordpress.test/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(posts => {

            const body = document.getElementById('body-post');

            console.log(posts)
            
            body.innerHTML = ''

            for(const post of posts){
                body.innerHTML += `
                    <h4>${post.title.rendered}</h4>
                    <p>${post.content.rendered}</p>
                `
            }
        })
    
    return(
        <div id="body-post" className="container">

        </div>
    )
}