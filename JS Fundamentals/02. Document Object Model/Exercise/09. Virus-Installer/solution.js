function solve() {
    let buttonElements = document.querySelectorAll('button');
    let nextButton = buttonElements[0];
    nextButton.addEventListener('click', nextClickEvent);
    let cancelButton = buttonElements[1];
    cancelButton.addEventListener('click', cancelClickEvent);
    let step = 1;

    function nextClickEvent(e) {
        if (step === 1) {
            let contentElement = document.querySelector('#content');
            contentElement.style.backgroundImage = 'none';
            let firstStepElement = document.getAnimations('firstStep');
            firstStepElement.style.display = 'block';
        } else if (currentStep === 2) {
            let inputElement = document.getElementsByTagName("input");
            if (inputElement[0].checked) {                
                document.getElementById("firstStep").style.display = "none";
                document.getElementById("secondStep").style.display = "block";
                document.querySelectorAll("button")[0].style.display = "none";
                setTimeout(function () {
                    document.querySelectorAll("button")[0].style.display = "inline-block";
                }, 3000);
            } else {
                currentStep--;
            }
        } else {
            document.getElementById("secondStep").style.display = "none";
            document.getElementById("thirdStep").style.display = "block";
            document.querySelectorAll("button")[0].style.display = "none";
            document.querySelectorAll("button")[1].textContent = "Finish";
        }
        currentStep++;
    };

    function cancelClickEvent(e) {
        let sectionElement = document.querySelector('section');
        sectionElement.style.display = 'none';
    };
}