class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.marketingBudget = this.budget * 0.40;
        this.financeBudget = this.budget * 0.25;
        this.productionBudget = this.budget * 0.35;
        this.employees = [];
    }

    get departmentsBudget() {
        return {
            marketing: this.marketingBudget,
            finance: this.financeBudget,
            production: this.productionBudget,
        }
    }

    add(employeeName, department, salary) {

        if (this.departmentsBudget[department] > salary) {
            let emp = {
                employeeName: employeeName,
                department,
                salary
            }

            if (department === 'marketing') {
                this.marketingBudget -= salary;
            }
            if (department === 'finance') {
                this.financeBudget -= salary;
            }
            if (department === 'production') {
                this.productionBudget -= salary;
            }
            

            this.employees.push(emp);

            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`
        }

        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`
    }

    employeeExists(employeeName) {
        let emp = this.employees.find(x => x.employeeName === employeeName);

        if (emp !== undefined) {

            return `Mr./Mrs. ${emp.employeeName} is part of the ${emp.department} department.`
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
    }

    leaveOrganization(employeeName) {
        let emp = this.employees.find(x => x.employeeName === employeeName);

        if (emp !== undefined) {

            this.departmentsBudget[emp.department] += emp.salary;

            this.employees.splice(this.employees.findIndex(x => x.employeeName === employeeName), 1);


            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
    }

    status() {
        let marketing = this.employees.filter(x => x.department === 'marketing').sort((a, b) => b.salary - a.salary);
        let finance = this.employees.filter(x => x.department === 'finance').sort((a, b) => b.salary - a.salary);
        let production = this.employees.filter(x => x.department === 'production').sort((a, b) => b.salary - a.salary);

        let result = '';

        result += `${this.name.toUpperCase()} DEPARTMENTS:`;

        let markArr = [];

        for (let obj of marketing) {
            markArr.push(obj.employeeName);
        }
        let finArr = [];

        for (let obj of finance) {
            finArr.push(obj.employeeName);
        }
        let proArr = [];

        for (let obj of production) {
            proArr.push(obj.employeeName);
        }

        result += `\nMarketing | Employees: ${marketing.length}: ${markArr.join(', ')} |  Remaining Budget: ${this.marketingBudget}`;
        result += `\nFinance | Employees: ${finance.length}: ${finArr.join(', ')} |  Remaining Budget: ${this.financeBudget}`;
        result += `\nProduction | Employees: ${production.length}: ${proArr.join(', ')} |  Remaining Budget: ${this.productionBudget}`;




        return result;
        
    }
}

let organization = new Organization('SBTech', 10000);

console.log(organization.add('Peter', 'marketing', 400));
console.log(organization.add('Sasho', 'marketing', 80000));
console.log(organization.employeeExists('Peter'));
console.log(organization.add('dimo', 'production', 1000));
console.log(organization.add('Pesho', 'production', 2000));
console.log(organization.status());