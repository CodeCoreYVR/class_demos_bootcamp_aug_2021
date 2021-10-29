const fetchButton = document.querySelector("#fetch-button");

fetchButton.addEventListener('click', () => {
    if (false) {
        //#region  1. XMLHttpRequest
        // to use this, we need to create an instance of it
        const xhrStudents = new XMLHttpRequest();

        xhrStudents.open("GET", "http://localhost:3000/students");
        // open method accepts two arguments, 
        // the first is to specify the http method => "GET", "POST", "DELETE", "PATCH"
        // the second is the url

        xhrStudents.onload = () => {
            // what are we going to do once we got the response
            console.log("Students: ", JSON.parse(xhrStudents.responseText));
        }

        xhrStudents.send();

        const xhrDepartments = new XMLHttpRequest();
        xhrDepartments.open("GET", "http://localhost:3000/departments");
        xhrDepartments.onload = () => {
            console.log("departments: ", JSON.parse(xhrDepartments.responseText));
        }
        xhrDepartments.send();
        //#endregion

        // #region 2. jQuery
        $.ajax({
            url: "http://localhost:3000/students",
            success: (responseData) => {
                console.log("jQuery: ", responseData);
            }
        })
        // #endregion

        //#region 3. super agent
        superagent.get("http://localhost:3000/students").then(res => {
            console.log("superagent: ", JSON.parse(res.text));
        })
        //#endregion
    }


})

// fetchButton.addEventListener("click", () => {
//     fetch("http://localhost:3000/students").then(res => {
//         return res.json();
//     }).then(data => {
//         console.log("fetch: ", data);
//     })
// })

// fetchButton.addEventListener("click", async () => {
//     const response = await fetch("http://localhost:3000/students");
//     const jsonData = await response.json();
//     console.log("async await", jsonData);
// })

fetchButton.addEventListener("click", async () => {
    const response = await axios.get("http://localhost:3000/students");
    console.log("axios: ", response.data);
})