angular.module("filters",[])
 .filter("minOrmax",function(){
    return function(origin,type){
        var type=type||"min";
        var temp=origin[0];
        for(var i=0;i<origin.length;i++){
            if(type=="min"){
                if(temp>origin[i]){
                    temp=origin[i];
                }
            }else if(type=="max"){
                if(temp<origin[i]){
                    temp=origin[i];
                }
            }
        }
        return temp;
    }
})

