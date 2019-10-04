function solve(studentExamPoints, homeworkDone, maxHomework) {

    let grade = 0;
    let maxCoursePoints = 100;
    let maxExamPoints = 400;
    let totalPoints = studentExamPoints / maxExamPoints * 90;
    let bonus = (homeworkDone / maxHomework) * (100 * 0.1);
    totalPoints += bonus;
    grade = 3 + 2 * (totalPoints - maxCoursePoints / 5) / (maxCoursePoints / 2);

    if (studentExamPoints === maxExamPoints) {
        grade = 6;
        
    } else {
        if (homeworkDone === maxHomework) {
            if (grade > 6) {
                grade = 6;
            }
            if (grade < 3) {
                grade = 2;
            }
            
        } else {            
            if (grade > 6) {
                grade = 6;
            }
            if (grade < 3) {
                grade = 2;
            }
        } 
    }
    console.log(grade.toFixed(2));

}

solve(300, 10, 10);