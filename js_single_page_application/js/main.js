// Cross-Origin requests happen in the following cases
//  1. When we try to make a request from a different domain to our API.
//  example: a request from facebook to google => two completely different domains
// 2. When we try to make a request from the same domain but different ports
// example http://localhost:9999 => http://localhost:3000
// 3. When we try to make a request from the same domain but different protocols
// example http://localhost:3000 => https://localhost:3000
// 4. When we try to make a request from a sub domain to a domain
// example http://developers.google.com => http://google.com





// get all the questions => GET http://localhost:3000/api/v1/questions
// get a question =>        GET http://localhost:3000/api/v1/questions/28
// create a question =>     POST http://localhost:3000/api/v1/questions
// update a question =>     PATCH http://localhost:3000/api/v1/questions/10
// delete a question =>     DELETE http://localhost:3000/api/v1/questions/54


const baseUrl = "http://localhost:3000/api/v1";
const Question = {
    index() {
        return fetch(`${baseUrl}/questions`)
            .then(res => res.json());
    },
    one(qid) {
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
const refreshQuestion = () => {
    Question.index().then(questions => {
        const questionsContainer = document.querySelector(".question-list");
        let questionsHTML = '';
        questions.forEach(question => {
            questionsHTML += `
                <li>
                    <a class="question-link" data-qid="${question.id}" href="">
                        <span>${question.id} - </span>
                        ${question.title}
                    </a>
                </li>
            `
        });
        questionsContainer.innerHTML = questionsHTML;
    })
}
refreshQuestion();

// to log in POST http://localhost:3000/api/v1/session
const Session = {
    create(params) {
        return fetch(`${baseUrl}/session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
}

const navigateTo = (sectionid, clickedLink) => {
    // we clicked the a tags
    // get all the section tags and remove the active class of the section tag
    document.querySelectorAll(".page").forEach(node => {
        node.classList.remove("active");
    })
    // get all the a tags and remove the active class of the a tag
    document.querySelectorAll(".navbar a").forEach(node => {
        node.classList.remove("active");
    })
    // add the active class to the section we want to display
    const section = document.querySelector(`#${sectionid}`);
    section.classList.add("active");
    // add the active class to the a tag we want to focus on
    clickedLink.classList.add("active");
}

const getOneQuestion = (questionId) => {
    Question.one(questionId).then(question => {
        console.log(question);
        const questionHTML =
            `<div class="ui segment question-show-container">
                <div class="ui header">${question.title}</div>
                <p>${question.body}</p>
                <small>Asked by: ${question.author.full_name}</small>
                <a class="ui right floated orange button link" id="edit-button" data-target="question-edit" data-qid="${question.id}" href="">Edit</a>
                <a class="ui right floated red button link" id="delete-button" data-target="question-delete" data-qid="${question.id}" href="">Delete</a>
            </div>
            <div class="ui segment">
                <h3 class="ui horizontal divider">Answers</h3>
                <ul class="ui relaxed divided list">
                    ${question.answers.map(answer => `<div class="item">${answer.body}</div>`).join("")}  
                </ul>
            </div>`;
        document.querySelector("#question-show").innerHTML = questionHTML;
        navigateTo("question-show", document.querySelector('[data-sectionid="question-show"]'));
    })
}

document.addEventListener("DOMContentLoaded", () => {
    Session.create({ email: "admin@user.com", password: "123" }).then(res => {
        console.log(res);
    });

    document.querySelector(".navbar").addEventListener("click", event => {
        event.preventDefault();
        const { target } = event;
        console.log(target.dataset.sectionid);
        if (target.dataset.sectionid) {
            navigateTo(target.dataset.sectionid, target);
        }
    })

    document.querySelector(".question-list").addEventListener("click", event => {
        event.preventDefault();
        const { target } = event;
        const questionId = target.dataset.qid;
        console.log(questionId);
        if (questionId) {
            // means we clicked on the a tag => we have display that question in question show section
            getOneQuestion(questionId);
        }
    })

    document.querySelector("#new-question-form").addEventListener("submit", event => {
        event.preventDefault();
        const title = document.querySelector("#title").value;
        const body = document.querySelector("#body").value;
        const params = { body: body, title: title };
        // const params = { body, title };
        Question.create(params).then(question => {
            // question? => {id:xx}
            if (question && question.id) {
                getOneQuestion(question.id);
            }
        })
    })

    // document.querySelector("#edit-button").addEventListener("click", event => {
    //     event.preventDefault();
    //     const qid = event.target.dataset.qid;
    //     console.log(qid);
    // })
    document.querySelector("#question-show").addEventListener("click", event => {
        event.preventDefault();
        console.log(event.target.dataset);
        const dataset = event.target.dataset;
        if (dataset && dataset.target) {
            // clicking on the 2 buttons
            console.log("you are clicking a button");
            if (dataset.target === 'question-edit') {
                // edit
                Question.one(dataset.qid).then(question => {

                    document.querySelector("#edit-question-form [name=title]").value = question.title;
                    document.querySelector("#edit-question-form [name=body]").value = question.body;
                    document.querySelector("#edit-question-form [name=id]").value = question.id;
                    navigateTo("question-edit", document.querySelector('[data-sectionid="question-edit"]'));
                })
            } else {
                // delete
                Question.destroy(dataset.qid).then(data => {
                    console.log(data);
                    refreshQuestion();
                    navigateTo("question-index", document.querySelector('[data-sectionid="question-index"]'));
                })
            }
        }
    })
    const editForm = document.querySelector("#edit-question-form");
    editForm.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(editForm);
        const updatedParams = {
            title: formData.get('title'),
            body: formData.get('body')
        };
        console.log(updatedParams);
        console.log(formData.get('id'));
        Question.update(updatedParams, formData.get('id')).then(data => {
            getOneQuestion(data.id)
        })
    })
})