function Validation(){
    this.kiemTraRong = function(value){
        if(value.trim() === ""){
            return true;
        };
        return false;
    };
};