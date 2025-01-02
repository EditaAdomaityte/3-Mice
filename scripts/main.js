import { employeeList } from "./employees.js"


const mainContainer = document.querySelector("#container")

const render= async () => {
    const employeeHTML = await employeeList()



    const allHTML =`
     <header class="header">
            <h1 class="title"></h1>
        </header>

        <article class="employees">
            <section>
                <h2>Employee List</h2>
                ${employeeHTML}
            </section>
        </article>   
    `

mainContainer.innerHTML = allHTML

}
render()