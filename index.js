//  -----------------------------------------      FETCH API (JSON DATA)      -----------------------------------------------

fetch("studData.json")
.then(function(response){
    return response.json();
})
.then(function(studentDetails){
    let placeholder = document.querySelector("#data-output")

    let out = "";
    for(let data of studentDetails){
        out += `
            <tr>
                <td style="border: 1px solid black; padding: 10px;">${data.id}</td>
                <td style="border: 1px solid black; padding: 10px;">${data.name}</td>
                <td style="border: 1px solid black; padding: 10px;">${data.username}</td>
                <td style="border: 1px solid black; padding: 10px;">${data.email}</td>
            </tr>
        `
    }
    placeholder.innerHTML = out;
})