var Links = {
    linksetColor : function(color){
        var alist = document.querySelectorAll('a')
        var count=0;
        while(count<alist.length){
            alist[count].style.color=color;
            count=count+1
        }
    }
}

var Body = {
    bodysetColor : function(color){
        document.querySelector('body').style.color=color;
    },
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor=color;
    },

}


function nightDayHandler(self){
    var target=document.querySelector('body').style
    if(self.value ==='야간모드로'){
        Body.setBackgroundColor('black');
        Body.bodysetColor('white');
        self.value= '주간모드로'
        Links.linksetColor('powderblue')
        
    } else {
        Body.setBackgroundColor('white');
        Body.bodysetColor('black');
        self.value= '야간모드로'
        Links.linksetColor('blue');
    } 
}
