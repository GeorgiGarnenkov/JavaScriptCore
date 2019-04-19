function solve() {

   // •	JS-Fundamentals : 170 BGN
   // •	JS-Advanced : 180 BGN
   // •	JS-Applications : 190 BGN
   // •	JS-Web : 490 BGN
   
   $('button').on('click', function () {
      $('#myCourses > div.courseBody > ul').empty();

      let coursesList = [];
      let cost = 0;

      let checkBoxes = $('input:checkbox:checked');


      for (let i = 0; i < checkBoxes.length; i++) {
         let currentCourseName = $(checkBoxes[i]).val();

         if (currentCourseName === 'js-fundamentals') {
            cost += 170;
            coursesList.push('JS-Fundamentals');
         }

         if (currentCourseName === 'js-advanced') {

            if (coursesList.includes('JS-Fundamentals')) {

               cost += (180 - (180 * 0.1));
               coursesList.push('JS-Advanced');

            } else {

               cost += 180;
               coursesList.push('JS-Advanced');
            }
         }

         if (currentCourseName === 'js-applications') {

            if (coursesList.includes('JS-Fundamentals') && coursesList.includes('JS-Advanced')) {

               cost += 190;
               cost -= cost * 0.06;
               coursesList.push('JS-Applications');

            } else {

               cost += 190;
               coursesList.push('JS-Applications');
            }
         }

         if (currentCourseName === 'js-web') {

            if (coursesList.includes('JS-Fundamentals') && coursesList.includes('JS-Advanced') && coursesList.includes('JS-Applications')) {

               cost += 490;
               coursesList.push('JS-Web');
               coursesList.push('HTML and CSS');

            } else {

               cost += 490;
               coursesList.push('JS-Web');
            }
         }

      }
      
      if ($("input[name=educationForm]:checked").val() === 'online') {
         cost -= (cost * 0.06);
      }

      let inputField = $('#myCourses > div.courseBody > ul');

      for (let course of coursesList) {
         let li = $('<li>');
         li.append(course);
         inputField.append(li);
      }

      let costField = $('#myCourses .courseFoot');
      costField.empty();

      let p = $('<p>');
      p.append(`Cost: ${Math.floor(cost)}.00 BGN`);

      costField.append(p);

   });
}

solve();