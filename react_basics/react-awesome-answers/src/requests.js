const baseUrl = "http://localhost:3000/api/v1";
export const Question = {
    index() {
        return fetch(`${baseUrl}/questions`)
            .then(res => res.json());
    },
    show(qid) {
        // baseUrl + "/" + qid => `${baseUrl}/${qid}`
        return fetch(`${baseUrl}/questions/${qid}`)
            .then(res => res.json());
    },
    create(params) {
        return fetch(`${baseUrl}/questions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    update(params, qid) {
        return fetch(`${baseUrl}/questions/${qid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy(qid) {
        return fetch(`${baseUrl}/questions/${qid}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(res => res.json())
    }
}

//Sign In AJAX Helper
export const Session = {
    create(params) {
        return fetch(`${baseUrl}/session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy() {
        return fetch(`${baseUrl}/session`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(res => res.json())
    }
}

export const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${baseUrl}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: params })
        }).then(res => res.json())
    }
}


export const Gift = {
    create(params) {
        return fetch(`${baseUrl}/gifts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
}