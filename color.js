function setPColor(color){
    document.querySelector('p').style.color=color;
}

var Link = {
    setLinkColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i<alist.length){
        //     alist[i].style.color = color;
        //     i = i+1;
        // }
        $('a').css('color', color);
    }
}

var Body = {
    setBackColor:function(color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor',color);
    },
    setColor:function(color){
        // document.querySelector('body').style.color=color;
        $('body').css('color',color)
    }
}

function nightDayHandler(self){
    if(self.value ==='night'){
        Body.setBackColor('black');
        Body.setColor('red');
        setPColor('powderblue');
        Link.setLinkColor('powderblue');
        self.value='day'
    }else{
        Body.setBackColor('white');
        Body.setColor('green');
        setPColor('black');
        Link.setLinkColor('black');
        self.value='night'
    }
}