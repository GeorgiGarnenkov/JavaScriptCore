(function () {
    let id = 0;

    class Extensible{
        constructor(){
            this.id = id++;
        }
    
        extend(template) {
            for (let item of Object.keys(template)) {
                if (typeof (template[item]) === 'function') {
                    Object.getPrototypeOf(this)[item] = template[item];
                } else {
                    this[item] = template[item];
                }
            }
        }
    }

    return Extensible;

})();
