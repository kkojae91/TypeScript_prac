"use strict";
var helloPerson = function (name, age) {
    if (age === undefined) {
        console.log("\uC548\uB155\uD558\uC138\uC694?! \uC800\uB294 " + name + " \uC785\uB2C8\uB2E4.");
    }
    else {
        console.log("\uC548\uB155\uD558\uC138\uC694?! \uC800\uB294 " + name + " \uC785\uB2C8\uB2E4. \uB098\uC774\uB294 " + age + " \uC785\uB2C8\uB2E4.");
    }
};
helloPerson("kkojae", 31);
helloPerson("jaejeung");
