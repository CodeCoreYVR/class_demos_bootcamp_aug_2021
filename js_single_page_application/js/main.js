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

const baseUrl = "http://localhost:3000/api/v1/questions";
const Question = {
    index() {
        return fetch(baseUrl)
            .then(res => res.json());
    },
    one(qid) {
        // baseUrl + "/" + qid => `${baseUrl}/${qid}`
        return fetch(`${baseUrl}/${qid}`)
            .then(res => res.json());
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

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".navbar").addEventListener("click", event => {
        event.preventDefault();
        const { target } = event;
        console.log(target.dataset.sectionid);
        if (target.dataset.sectionid) {
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
            const section = document.querySelector(`#${target.dataset.sectionid}`);
            section.classList.add("active");
            // add the active class to the a tag we want to focus on
            target.classList.add("active");
        }
    })

    document.querySelector(".question-list").addEventListener("click", event => {
        event.preventDefault();
        const { target } = event;
        const questionId = target.dataset.qid;
        console.log(questionId);
        if (questionId) {
            // means we clicked on the a tag => we have display that question in question show section
            Question.one(questionId).then(question => {
                console.log(question);
                const questionHTML =
                    `<div class="ui segment question-show-container">
                        <div class="ui header">${question.title}</div>
                        <p>${question.body}</p>
                        <small>Asked by: ${question.author.full_name}</small>
                        <a class="ui right floated orange button link" data-target="question-edit" data-qid="${question.id}" href="">Edit</a>
                        <a class="ui right floated red button link" data-target="delete-question" data-qid="${question.id}" href="">Delete</a>
                    </div>
                    <div class="ui segment">
                        <h3 class="ui horizontal divider">Answers</h3>
                        <ul class="ui relaxed divided list">
                            ${question.answers.map(answer => `<div class="item">${answer.body}</div>`).join("")}  
                        </ul>
                    </div>`;
                document.querySelector("#question-show").innerHTML = questionHTML;

            })
        }
    })
})