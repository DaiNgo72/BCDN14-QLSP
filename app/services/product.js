import { BASE_URL } from "../views/constant.js"

export function getListProduct() {
    return fetch(`${BASE_URL}/product`)
        .then(function (r) {
            if (r.ok) {
                return r.json();
            } else {
                throw "getListProduct fail !!!";
            }
        })
}

export function deleteProduct(id) {
    return fetch(`${BASE_URL}/product/${id}`, {
        method: "delete"
    }).then(function (r) {
        if (r.ok) {
            return r.json();
        } else {
            throw "deleteProduct fail !!!";
        }
    })
}

// function _fetch() {
//     return {
//         then() { },
//         catch() { }
//     }
// }

// function render() {
//     return _fetch()
// }


// render().then()

