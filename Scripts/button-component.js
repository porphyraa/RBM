AFRAME.registerComponent('hoverable', {
    schema: {
        color: {default: 'red'}
    },

    init: function(){
        var data = this.data;
        var el = this.el;
        var defaultColor = el.getAttribute('material').color;

        el.addEventListener('mouseenter', function () {
            console.log("Mouse Hover");
            el.setAttribute("material", {color: data.color})
        })

        el.addEventListener('mouseleave', function () {
            console.log("Mouse Leave");
            el.setAttribute("material", {color: defaultColor})
        })
    }
});

AFRAME.registerComponent('clickable', {
    schema: {
        name: {type: 'string', default: "nameless"},
        target_url: {type: 'string', default: ""}
    },

    init: function(){
        var self = this;
        var data = self.data;
        var el = this.el;

        el.addEventListener('mouseenter', function () {
            //console.log("Aim to", data.name);
        })

        el.addEventListener('click', function () {
            //console.log("Go to", data.target_url);
            location.replace(data.target_url);
        })

    }
});

