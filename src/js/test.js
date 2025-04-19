const data = new Date();
exports.date = data;

exports.getDate = function(name="Anonim") {
    const currentHour = data.getHours();

    if(currentHour >= 0 && currentHour <= 8) {
        console.log(currentHour," Писька просыпайся", name);
    }
    else if (currentHour > 8 && currentHour <= 12) {
        console.log(currentHour, " Ебать ты ахуевший, завод такое не прощает", name);
    }
    else if (currentHour > 12 && currentHour <= 24) {
        console.log(currentHour, " Дааамс.....", name);
    }
}