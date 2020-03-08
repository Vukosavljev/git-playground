// PARENT CLASS
function Widget(width, height) {
  this.widht = width;
  this.height = height;
  this.$elem = null;
}

Widget.prototype.render = function($where) {
  if (this.$elem) {
    this.elem$
      .css({
        widht: this.widht + 'px',
        height: this.height + 'px'
      })
      .appendTo($where);
  }
};

// CHILD CLASS
function Button(widht, height, label) {
  Widget.call(this, widht, height);
  this.label = label;

  this.$elem = $('<button>').text(this.label);
}

Button.prototype = Object.create(Widget.prototype);

Button.prototype.render = functino($where) {
    // super call
    Widget.prototype.render().call(this, $where);
    this.elem$.click(this.onclick.bind(this))
}

Button.prototype.onClick = function(event) {
    console.log(`Button ${this.label} clicked!`)
}

// For rendering only
$(document).ready( function() {
    const $body = $(document.body);
    const btn1 = new Button(120, 20, 'Hello');
    const btn2 = new Button(140, 40, 'World');

    btn1.render($body);
    btn2.render($body);
})