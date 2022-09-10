let size = 8;
let desk = "";
for(var i = 0; i < size; i++){
    for(var a = 0; a < size; a++){
        if((i+a) %2 === 0){
            desk += " ";
        }else {
            desk += "*";
        }
    }
    desk += "\n";
}
console.log(desk);