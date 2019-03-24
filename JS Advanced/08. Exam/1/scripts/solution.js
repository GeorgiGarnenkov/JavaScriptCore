function solve() {

   // •	JS-Fundamentals : 170 BGN
   // •	JS-Advanced : 180 BGN
   // •	JS-Applications : 190 BGN
   // •	JS-Web : 490 BGN
   let courses = {
      'JS-Fundamentals': 170,
      'JS-Advanced': 180,
      'JS-Applications': 190,
      'JS-Web': 490
   }

   let $jsFundamentals = $('input[name="js-fundamentals"]');
   let $jsAdvanced = $('input[name="js-advanced"]');
   let $jsApplications = $('input[name="js-applications"]');
   let $jsWeb = $('input[name="js-web"]');
   let $availableCourses = $('#availableCourses .courseBody ul');

   for (let li of $availableCourses.children()) {
      let inputCheckbox = li.children().eq(0);

      if (inputCheckbox.addAttr('checked', true)) {
         li.on('click', () => {
            inputCheckbox.addAttr('checked', false);
         })
      }
      if (inputCheckbox.attr('checked', false)) {
         li.on('click', () => {
            inputCheckbox.addAttr('checked', true);
         })
      }

   }

   let $onsite = $('input[value="onsite"]');
   let $online = $('input[value="online"]');

   let $button = $('button[value="signMeUp"]');

   let $courseBody = $('#myCourses div .courseBody ul');
   let $courseCost = $('#myCourses div .courseFoot p');

   let discount = 0;

   $button.on('click', () => {

   });

   function check() {
      for (let li of $availableCourses.children()) {
         if (li.children()[0]) {
            console.log('good');
         }
      }
   }

   function create() {

   }

   function calculate() {

   }

}

solve();