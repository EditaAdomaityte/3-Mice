

export const employeeList = async() => {
    const getEmployees = await fetch ("http://localhost:8088/employees?_expand=computer&_expand=department&_expand=location")
    const employees = await getEmployees.json()

    let html="<article>"
    const mapEmployees = employees.map(
        (employee)=>{
            const employeeAge = 2025-employee.birthYear
            return `<div class='employee'value=${employee.id}>
            <header class="employee__name">
            <h3>${employee.firstName} ${employee.lastName} (${employeeAge} years old)</h3></header>
            <section class="employee__computer">
             Currently using a ${employee.computer.model}(${employee.computer.year})
            </section>
            <section class="employee__department">
             Works in the ${employee.department.name} department
            </section>
            <section class="employee__location">
            Works at the ${employee.location.name} office
            </section>
            </div>`
        }
    )
    
    
    html += mapEmployees.join("")
    
    html += "</article>"
    return html
}   