let solution = (function () {
    const add = ([xA, yA], [xB, yB]) => {
        return [xA + xB, yA + yB];
    };
    const multiply = ([xA, xB], scalar) => {
        return [xA * scalar, xB * scalar];
    };
    const length = ([xA, xB]) => {
        return Math.sqrt(xA * xA + xB * xB);
    };
    const dot = ([xA, yA], [xB, yB]) => {
        return xA * xB + yA * yB;
    };
    const cross = ([xA, yA], [xB, yB]) => {
        return xA * yB - yA * xB;
    };

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };

})();

console.log(solution.length([3, -4]));