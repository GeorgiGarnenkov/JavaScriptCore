function solve(name, age, weightKg, heightCm) {

    const calcBMI = (weight, heightM) => {
        return Math.round(weight / (heightM * heightM));
    };

    const generateStatus = (bmi) => {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'normal';
        } else if (bmi >= 25 && bmi < 30) {
            return 'overweight';
        } else if (bmi >= 30) {
            return 'obese';
        }
    };

    const bmi = calcBMI(weightKg, heightCm / 100);
    const status = generateStatus(bmi);
    const chart = {
        name: name,
        personalInfo: {
            age: age,
            weight: weightKg,
            height: heightCm
        },
        BMI: bmi,
        status: status
    };
    if (chart.status === 'obese') {
        chart.recommendation = 'admission required';
    }

    return chart;
}

console.log(solve('Petkan', 20, 80, 178));

