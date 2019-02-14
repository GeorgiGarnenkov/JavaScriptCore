function solve(day, service, hour) {

    let time = Number(hour);
    if (day === `Saturday` || day === `Sunday`) {
       
        if (time >= 8.00 && time <= 22.00) {
            
            switch (service) {
                case `Fitness`:
                    console.log(8.00);
                    break;
                case `Sauna`:
                    console.log(7.00);
                    break;
                case `Instructor`:
                    console.log(15.00);
                    break;
            }
        }
    }
    else{

        if (time >= 8.00 && time <= 15.00) {
            
            switch (service) {
                case `Fitness`:
                    console.log(5.00);
                    break;
                case `Sauna`:
                    console.log(4.00);
                    break;
                case `Instructor`:
                    console.log(10.00);
                    break;
            }
        }
        else if (time > 15.00 && time <= 22.00) {
            
            switch (service) {
                case `Fitness`:
                    console.log(7.50);
                    break;
                case `Sauna`:
                    console.log(6.50);
                    break;
                case `Instructor`:
                    console.log(12.50);
                    break;
            }
        }
    }
}

solve('Sunday', 'Fitness', 22.00);