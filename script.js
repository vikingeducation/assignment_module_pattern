module = (function(text, $) {
  var _$h1;

  var _getH1Length = function() {
    return _$h1.text().length
  }


  return {
    init: function() {
      _$h1 = $("h1");
    },

    setH1Text: function() {
      _$h1.text(text);
    },

    getH1Text: function() {
      return _$h1.text();
    },

    getH1TextLength: _getH1Length,

    getTextAndLength: function() {
      console.log(_$h1.text());
      console.log(_getH1Length());
    }
  }
})("hiiiii", $);


$(document).ready(function() {
            module.init();
            module.setH1Text();
            })