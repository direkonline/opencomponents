/*
        * https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
        * https://www.webcomponents.org/community/articles/introduction-to-template-element
        *
        */ 
var Template = {
    auto : true
};
    

    // V.1
    Template.setTemplate = function(setTemplate){
        //console.log("setTemplate");
        var selector = document.querySelector(setTemplate);
        
        //selectors.forEach(function(element, i){
            // select template by attribute data-template
        var templateId = selector.getAttribute("data-template");
        var template = document.getElementById(templateId);
            //console.log(templateId);
            //console.log(template);
        var clone = template.content.cloneNode(true);

        selector.appendChild(clone);
        //});
    }

    /// V.3
    Template.setTemplates = function(selectors){
        Template.cloneTemplate(document.querySelectorAll(selectors));
    }

    /// V.2
    Template.cloneTemplate = function(selectors){
        selectors.forEach(function(selector, i){
            var template = document.getElementById(selector.getAttribute("data-template"));
            //var clone = template.content.cloneNode(true);
            var clone = document.importNode(template.content, true);
            selector.appendChild(clone);
        });
    }

    /// V.4
    Template.init = function(){
        if(Template.auto){
            var selectors = document.querySelectorAll("[data-template]")
            Template.cloneTemplate(selectors);
        }
    }
    

Template.init();