var tools = {
  getLineLength: function(el){
    var x1 = el.attr('x1'), x2 = el.attr('x2'), y1 = el.attr('y1'), y2 = el.attr('y2');
    return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1), 2));
  },
  getCircleLength: function(el){
    var radius = parseInt(el.attr('r'));
    return 2 * Math.PI * radius;
  },
  setDashStyles: function(el, i, addDelay){
    var type = el.get(0).nodeName;
    var len = 0;
    var duration = .4;
    var delay = i * (duration - .1) + addDelay;
    if(type === 'line'){
      len = this.getLineLength(el) + 1;
    }else if(type === 'circle'){
      len = this.getCircleLength(el) + 1;
    }else if(type === 'path'){
      len = el.get(0).getTotalLength() + 1;
    }
    
    el.css({
      strokeDasharray:len, 
      strokeDashoffset:len, 
      animation: 'undash '+duration+'s '+delay+'s forwards'
    });
  }
};


$('.middle').each(function(i, el){
  tools.setDashStyles($(el), parseInt($(el).data('order')), 0);
});

 $('.top').each(function(i, el){
   tools.setDashStyles($(el), i, 0);
 });

  $('.bottom').each(function(i, el){
   tools.setDashStyles($(el), i, 0);
 });


$('.low-mid').each(function(i, el){
  tools.setDashStyles($(el), i, 3);
});

setTimeout(function(){
  $('.social-icon').fadeIn();
}, 4000)