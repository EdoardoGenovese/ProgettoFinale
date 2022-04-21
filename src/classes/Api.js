const baseUrl = 'http://wordpress.test/wp-json/wp/v2/';

export default class Api {

    posts(options = {}) {
        let url = `${baseUrl}posts`;

        if (options.id !== undefined) {
            url += `/${options.id}`;
        }

        url += '?_embed';

        if (options.category !== undefined) {
            url += `&categories=${options.category}`;
        }

        if (options.tag !== undefined) {
            url += `&tags=${options.tag}`
        }
        
        return fetch(url).then(res => res.json());
    }

    categories() {
        let url = `${baseUrl}categories`;
        
        return fetch(url).then(res => res.json());
    }

    tags() {
        let url = `${baseUrl}tags`;

        return fetch(url).then(res => res.json());
    }
}