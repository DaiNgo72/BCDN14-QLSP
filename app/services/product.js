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

export function getDetailProduct(id) {
    return fetch(`${BASE_URL}/product/${id}`).then(function (r) {
        if (r.ok) {
            return r.json();
        } else {
            throw "getDetailProduct fail !!!";
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

// default params value
function _fetch(method = 'get') {
    // console.log(method || "get")
    console.log(method)
}

_fetch() // get
_fetch('get')// get
_fetch('post') // post
_fetch('delete') // delete
_fetch('put') // put 
_fetch('patch') // patch 
_fetch('bcdn14') // bcdn14 