var fs =  require('fs');

fs.readdir(process.argv[2], function(err,list){
    for(i=0;i<list.length-1;i++){
       file = list[i].split(".");
        if(file[1] == process.argv[3]){
            console.log(list[i]);
        }
    }
});