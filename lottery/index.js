$(function() {
    var lot = {
        count: $('li').length,
        times:0,
        timer:null,
        cycle:5,
        speed: 10,
        index:0, //当前位置
        pd:0 ,// 中奖位置
        // 更换每小格的样式
        roll:function(){
            $('li').eq(this.index).addClass('on').siblings().removeClass('on')
            this.index++;
            if(this.index>this.count-1){
                this.index = 0
            }
        }
    }

    function render() {
        //转的不够
        if(lot.times < lot.cycle){
            lot.speed -=50
            lot.timer = setInterval( lot.roll, lot.speed);
        }
    }
    $('btn').on('click',function() {
        lot.speed = 800
        render()
    })






})