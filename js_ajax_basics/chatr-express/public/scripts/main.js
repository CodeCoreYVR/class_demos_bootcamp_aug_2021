// Write chatr code here!

// fetch('http://localhost:3434/messages')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
// const refreshMessages = () => {
//     fetch('http://localhost:3434/messages')
//         .then(res => res.json())
//         .then(data => {
//             const messagesContainer = document.querySelector("#messages");
//             let messagesHTML = "";
//             data.forEach(message => {
//                 messagesHTML += `
//                 <li>
//                     ${message.body}
//                     <i data-id=${message.id} class="delete-link">x</i>
//                 </li>
//             `;
//             });
//             messagesContainer.innerHTML = messagesHTML;
//         })
// }
// refreshMessages();


const Message = {
    index() {
        return fetch('http://localhost:3434/messages')
            .then(res => res.json())
    },
    create(params) {
        const headers = new Headers({
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        });
        return fetch("http://localhost:3434/messages", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(params)
        })
    },
    delete(id) {
        return fetch(`http://localhost:3434/messages/${id}`, { method: "DELETE" })
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const messageForm = document.getElementById("new-message");

    // POST with form data
    // messageForm.addEventListener("submit", event => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     fetch("http://localhost:3434/messages", {
    //         method: "POST",
    //         body: formData
    //     })
    // })

    // POST with JSON
    // messageForm.addEventListener("submit", event => {
    //     event.preventDefault();
    //     const { currentTarget } = event
    //     const headers = new Headers({
    //         "Accept": "application/json, text/plain, */*",
    //         "Content-Type": "application/json"
    //     });
    //     fetch("http://localhost:3434/messages", {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify({ body: "Hello World" })
    //     }).then(() => {
    //         console.log('Message created!');
    //         refreshMessages();
    //         currentTarget.reset();
    //     })
    // })

    // const messagesContainer = document.querySelector("#messages");

    // messagesContainer.addEventListener("click", event => {
    //     const { target } = event;
    //     console.log(target.dataset.id);
    //     if (target.matches('.delete-link')) {
    //         // if it has the class .delete-link then we will delete
    //         fetch(`http://localhost:3434/messages/${target.dataset.id}`, { method: "DELETE" })
    //             .then(() => {
    //                 refreshMessages();
    //             })
    //     }
    // })


    //#region refactory
    const refreshMessages = () => {
        Message.index()
            .then(data => {
                const messagesContainer = document.querySelector("#messages");
                let messagesHTML = "";
                data.forEach(message => {
                    messagesHTML += `
                    <li>
                        ${message.body}
                        <i data-id=${message.id} class="delete-link">x</i>
                    </li>
                `;
                });
                messagesContainer.innerHTML = messagesHTML;
            })
    }
    refreshMessages();

    messageForm.addEventListener("submit", event => {
        event.preventDefault();
        const { currentTarget } = event
        const formData = new FormData(currentTarget);
        Message.create({ body: formData.get('body') }).then(() => {
            console.log('Message created!');
            refreshMessages();
            currentTarget.reset();
        })
    })
    const messagesContainer = document.querySelector("#messages");

    messagesContainer.addEventListener("click", event => {
        const { target } = event;
        if (target.matches('.delete-link')) {
            // if it has the class .delete-link then we will delete
            Message.delete(target.dataset.id)
                .then(() => {
                    refreshMessages();
                })
        }
    })
    //#endregion
})

