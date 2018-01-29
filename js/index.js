var tools = {
  getLineLength: function(el){
    var x1 = el.getAttribute('x1'), x2 = el.getAttribute('x2'), y1 = el.getAttribute('y1'), y2 = el.getAttribute('y2');
    return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1), 2));
  },
  getCircleLength: function(el){
    var radius = parseInt(el.getAttribute('r'));
    return 2 * Math.PI * radius;
  },
  setDashStyles: function(el, i, addDelay){
    var type = el.tagName;
    var len = 0;
    var duration = .4;
    var delay = i * (duration - .1) + addDelay;
    console.log(i);
    if(type === 'line'){
      len = this.getLineLength(el) + 1;
    }else if(type === 'circle'){
      len = this.getCircleLength(el) + 1;
    }else if(type === 'path'){
      len = el.getTotalLength() + 1;
    }

    el.style.strokeDasharray = len;
    el.style.strokeDashoffset = len;
    el.style.animation = 'undash '+duration+'s '+delay+'s forwards';
  }
};
 console.log("foo");

document.querySelectorAll('.middle').forEach(function(el, i){
  tools.setDashStyles(el, parseInt(el.getAttribute('data-order')), 0);
});

 document.querySelectorAll('.top').forEach(function(el, i){
   tools.setDashStyles(el, i, 0);
 });

  document.querySelectorAll('.bottom').forEach(function(el, i){
   tools.setDashStyles(el, i, 0);
 });


document.querySelectorAll('.low-mid').forEach(function(el, i){
  tools.setDashStyles(el, i, 3);
});
