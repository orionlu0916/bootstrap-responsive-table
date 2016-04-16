(function($) {

    $.fn.responsiveTable = function(method) {

        var methods = {

            init : function(options) {
                this.responsiveTable.settings = $.extend({}, this.responsiveTable.defaults, options);
                return this.each(function() {
                    var $element = $(this), // reference to the jQuery version of the current DOM element
                         element = this;      // reference to the actual DOM element
                         
                    if($( window ).width() <= options.width){
                        methods.addTitle();
                    }
                });
            }

        }

        var helpers = {
            addTitle = function(){
                if(ResponsiveTable.defaults.displayTitle === true){
                    var titles = [];
                    var target = this;
                    target.find('.th').each(function(){
                        titles.push($(this).text());
                    });
                    target.find('.tbody .tr').each(function(index){
                        $(this).children().each(function(index){
                            $(this).html(titles[index]+" : "+$(this).html());
                        });
                    });
                };
            }
        }

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in responsiveTable plugin!');
        }

    }

    $.fn.responsiveTable.defaults = {
        displayTitle = true,
        width: 480
    }

    $.fn.responsiveTable.settings = {}

})(jQuery);