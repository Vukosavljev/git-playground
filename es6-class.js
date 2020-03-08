class Widget {
  constructor(widht, height) {
    this.widht = widht;
    this.height - height;
    this.$elem = null;
  }

  render($where) {
    if (this.$elem) {
      this.elem$
        .css({
          widht: this.widht + 'px',
          height: this.height + 'px'
        })
        .appendTo($where);
    }
  }
}

class Button extends Widget {
  constructor(widht, height, label) {
    this.widht = widht;
    this.height = height;
    this.label = label;
  }

  render($where) {
    super.render();
    this.elem$.click(this.onClick.bind(this));
  }

  onClick() {
    console.log(`Button ${this.label} clicked!`);
  }
}

// For rendering only
$(document).ready(function() {
  const $body = $(document.body);
  const btn1 = new Button(120, 20, 'Hello');
  const btn2 = new Button(140, 40, 'World');

  btn1.render($body);
  btn2.render($body);
});
