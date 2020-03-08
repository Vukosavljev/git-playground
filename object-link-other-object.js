const Widget = {
  init: function(widht, height) {
    this.widht = widht;
    this.height = height;
    this.$elem = null;
  },
  insert: function($where) {
    if (this.$elem) {
      this.elem$
        .css({
          widht: this.widht + 'px',
          height: this.height + 'px'
        })
        .appendTo($where);
    }
  }
};

const Button = Object.create(Widget);

Button.setup = function(widht, height, label) {
  this.init(widht, height);
  this.label = label;
  this.$elem = $('<button>').text(this.label);
};

Button.build = function($where) {
  this.insert($where);
  this.$elem.click(this.onClick.bind(this));
};

Button.onClick = function(event) {
  console.log(`Button ${this.label} clicked!`);
};

// For rendering only
$(document).ready(function() {
  const $body = $(document.body);
  const btn1 = new Button(120, 20, 'Hello');
  const btn2 = new Button(140, 40, 'World');

  btn1.render($body);
  btn2.render($body);
});
