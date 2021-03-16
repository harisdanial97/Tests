jQuery(document).ready(function() {

    jQuery('#first').on('click', function() {

        if(jQuery('#first').attr('data-click-state') == 1) {
            jQuery('#first').attr('data-click-state', 0);
            jQuery('#first').html("\\(\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}\\)");
            document.getElementById("myform1").style.visibility = "visible";

            if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady(); 
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else {
                jQuery('#eighth').html("\\(0 = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }
        }
        
        else  {
            jQuery('#first').attr('data-click-state', 1);
            jQuery('#first').html("\\({{\\partial \\rho} \\over {\\partial t}}\\)");
            document.getElementById("myform1").style.visibility = "hidden";
            document.getElementById("ninth").style.visibility = "hidden";
            document.getElementById("Assumptions1").value = "s2";
            jQuery("#Assumptions1").css( 'border', '');
            jQuery(".final").hide();jQuery("#nineteenth").hide();

            if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else if((jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }

            else {
                jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
                MathJax.startup.defaultReady();
            }
        }

    });

jQuery('#third').on('click', function() {

    if(jQuery('#third').attr('data-click-state') == 1) {
        jQuery('#third').attr('data-click-state', 0);
        jQuery('#third').html("\\(\\require{cancel}\\cancelto{0} {{\\partial u} \\over {\\partial x}}\\)");
        
        document.getElementById("myform2").style.visibility = "visible";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0 = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#third').attr('data-click-state', 1);
        jQuery('#third').html("\\({{\\partial u} \\over {\\partial x}}\\)");
        document.getElementById("myform2").style.visibility = "hidden";
        document.getElementById("tenth").style.visibility = "hidden";
        document.getElementById("Assumptions2").value = "s2";
        jQuery("#Assumptions2").css( 'border', '');
        jQuery(".final").hide();jQuery("#nineteenth").hide();

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

});

jQuery('#fourth').on('click', function() {

    if(jQuery('#fourth').attr('data-click-state') == 1) {
        jQuery('#fourth').attr('data-click-state', 0);
        jQuery('#fourth').html("\\(\\require{cancel}\\cancelto{0} {{\\partial v} \\over {\\partial y}}\\)");
        first_section += 10;
        jQuery("#nineteenth").hide();
        document.getElementById("myform3").style.visibility = "visible";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0 = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#fourth').attr('data-click-state', 1);
        jQuery('#fourth').html("\\({{\\partial v} \\over {\\partial y}}\\)");
        first_section -= 10;
        document.getElementById("myform3").style.visibility = "hidden";
        document.getElementById("eleventh").style.visibility = "hidden";
        document.getElementById("Assumptions3").value = "s2";
        jQuery("#Assumptions3").css( 'border', '');


        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#sixth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

});


jQuery('#sixth').on('click', function() {

    if(jQuery('#sixth').attr('data-click-state') == 1) {
        jQuery('#sixth').attr('data-click-state', 0);
        jQuery('#sixth').html("\\(\\require{cancel}\\cancelto{0} {{\\partial w} \\over {\\partial z}}\\)");
        
        document.getElementById("myform4").style.visibility = "visible";

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}}  + {{\\partial u} \\over {\\partial x}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\(0=0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

    else  {
        jQuery('#sixth').attr('data-click-state', 1);
        jQuery('#sixth').html("\\({{\\partial w} \\over {\\partial z}}\\)");
        document.getElementById("myform4").style.visibility = "hidden";
        document.getElementById("twelfth").style.visibility = "hidden";
        document.getElementById("Assumptions4").value = "s2";
        jQuery("#Assumptions4").css( 'border', '');
        jQuery(".final").hide();jQuery("#nineteenth").hide();

        if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial u} \\over {\\partial x}}  + {{\\partial w} \\over {\\partial z}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 1) ) {
            jQuery('#eighth').html("\\({{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 0) && (jQuery('#third').attr('data-click-state') == 1) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial u} \\over {\\partial x}} + {{\\partial w} \\over {\\partial z}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else if((jQuery('#first').attr('data-click-state') == 1) && (jQuery('#third').attr('data-click-state') == 0) && (jQuery('#fourth').attr('data-click-state') == 0) ) {
            jQuery('#eighth').html("\\({{\\partial \\rho} \\over {\\partial t}} + {{\\partial w} \\over {\\partial z}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }

        else {
            jQuery('#eighth').html("\\({{\\partial w} \\over {\\partial z}}  = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)");
            MathJax.startup.defaultReady();
        }
    }

});




first_section = 1;
Assumptions1_check = 0;
Assumptions2_check = 0;
Assumptions3_check = 0;
Assumptions4_check = 0;

jQuery("#Assumptions1").select().on("change", function() {
  var answer = document.getElementById("Assumptions1");
  document.getElementById("ninth").style.visibility = "hidden";
  jQuery("#Assumptions1").css( 'border', '');
});

jQuery("#Assumptions2").select().on("change", function() {
  var answer = document.getElementById("Assumptions2");
  document.getElementById("tenth").style.visibility = "hidden";
  jQuery("#Assumptions2").css( 'border', ''); 
});

jQuery("#Assumptions3").select().on("change", function() {
  var answer = document.getElementById("Assumptions3");
  document.getElementById("eleventh").style.visibility = "hidden";
  jQuery("#Assumptions3").css( 'border', '');

 
});


jQuery("#Assumptions4").select().on("change", function() {
document.getElementById("twelfth").style.visibility = "hidden";
jQuery("#Assumptions4").css( 'border', '');
var answer = document.getElementById("Assumptions4");

  
});



});


	


function addclass() {
	var element = document.getElementById("seventeenth");
	element.classList.add("mystyle");
}

function removeclass() {
	var element = document.getElementById("seventeenth");
	element.classList.remove("mystyle");
}
function myFunction1() {
  var checkBox1 = document.getElementById("checkbox1");
  var checkBox2 = document.getElementById("checkbox2");
  var checkBox3 = document.getElementById("checkbox3");
  var checkBox4 = document.getElementById("checkbox4");
  jQuery(".final").hide(); 
  
        if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0100 step2   
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0010 step3   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0001 step4   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1100 step5
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1010 step6
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1001 step7
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0110 step8
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0101 step9
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0011 step10
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 1110 step11
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1101 step12
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1011 step13
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0111 step14  x y z
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1111 step15  x y z t
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        else{
            jQuery('#seventeenth').html("\\(v = v(x,y,z,t)\\)");
            MathJax.startup.defaultReady();
        }


  var total = 1;
  if (checkBox1.checked == true){
    total += 1;
    document.getElementById("thirteenth").style.visibility = "hidden";
  } 
	else{
		document.getElementById("thirteenth").style.visibility = "hidden";
	}

  if (checkBox2.checked == true){
    total += 1;
  } 
  if (checkBox3.checked == true){
    total += 0;
  } 
  if (checkBox4.checked == true){
    total += 1;
  }  
  if (total == 5){
    flow_checkbox();
  } 
  if (total == 1){
   
   removeclass();
  }else{
	  addclass();
  }
  
  
}



function myFunction2() {
  var checkBox1 = document.getElementById("checkbox1");
  var checkBox2 = document.getElementById("checkbox2");
  var checkBox3 = document.getElementById("checkbox3");
  var checkBox4 = document.getElementById("checkbox4");
  jQuery(".final").hide(); 

  
        if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0100 step2   
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0010 step3   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0001 step4   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1100 step5
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1010 step6
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1001 step7
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0110 step8
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0101 step9
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0011 step10
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 1110 step11
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1101 step12
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1011 step13
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0111 step14  x y z
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1111 step15  x y z t
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        else{
            jQuery('#seventeenth').html("\\(v = v(x,y,z,t)\\)");
            MathJax.startup.defaultReady();
        }

  var total = 1;
  if (checkBox1.checked == true){
    total += 1;
    document.getElementById("fourteenth").style.visibility = "hidden";
  } 
  else{
    document.getElementById("fourteenth").style.visibility = "hidden";
}
  if (checkBox2.checked == true){
    total += 1;
  } 
  if (checkBox3.checked == true){
    total += 0;
  } 
  if (checkBox4.checked == true){
    total += 1;
  }  
  if (total == 5){
    flow_checkbox();
  } 
   if (total == 1){
   
   removeclass();
  }else{
	  addclass();
  }
  
  
}


function myFunction3() {
  var checkBox1 = document.getElementById("checkbox1");
  var checkBox2 = document.getElementById("checkbox2");
  var checkBox3 = document.getElementById("checkbox3");
  var checkBox4 = document.getElementById("checkbox4");
  jQuery(".final").hide(); 
  
        if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0100 step2   
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0010 step3   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0001 step4   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1100 step5
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1010 step6
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1001 step7
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0110 step8
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0101 step9
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0011 step10
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 1110 step11
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1101 step12
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1011 step13
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0111 step14  x y z
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1111 step15  x y z t
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        else{
            jQuery('#seventeenth').html("\\(v = v(x,y,z,t)\\)");
            MathJax.startup.defaultReady();
        }

  var total = 1;
  if (checkBox1.checked == true){
    total += 1;
    document.getElementById("fifteenth").style.visibility = "hidden";
  } 
else{
    document.getElementById("fifteenth").style.visibility = "hidden";
}

  if (checkBox2.checked == true){
    total += 1;
  } 
  if (checkBox3.checked == true){
    total += 0;
  } 
  if (checkBox4.checked == true){
    total += 1;
  }  
   if (total == 1){
   
   removeclass();
  }else{
	  addclass();
  }
  
}

function myFunction4() {
  var checkBox1 = document.getElementById("checkbox1");
  var checkBox2 = document.getElementById("checkbox2");
  var checkBox3 = document.getElementById("checkbox3");
  var checkBox4 = document.getElementById("checkbox4");
  jQuery(".final").hide(); 
  
        if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0100 step2   
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0010 step3   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0001 step4   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1100 step5
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1010 step6
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1001 step7
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0110 step8
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0101 step9
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0011 step10
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 1110 step11
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},z,\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1101 step12
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1011 step13
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancelto{0}{y},\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0111 step14  x y z
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},\\cancelto{0}{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1111 step15  x y z t
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},\\cancelto{0}{y},\\cancelto{0}{z},\\cancelto{0}{t})\\)");
            MathJax.startup.defaultReady();
        }
        else{
            jQuery('#seventeenth').html("\\(v = v(x,y,z,t)\\)");
            MathJax.startup.defaultReady();
        }

  var total = 1;
  if (checkBox1.checked == true){
    total += 1;
    document.getElementById("sixteenth").style.visibility = "hidden";
  } 
  else{
    document.getElementById("sixteenth").style.visibility = "hidden";
  }

  if (checkBox2.checked == true){
    total += 1;
  } 
  if (checkBox3.checked == true){
    total += 0;
  } 
  if (checkBox4.checked == true){
    total += 1;
  }  
  if (total == 5){
    flow_checkbox();
  } 
   if (total == 1){
   
   removeclass();
  }else{
	  addclass();
  }
  
}







setTimeout(function(){ 

$('.ans_btn').click(function() {
    var answer1 = document.getElementById("Assumptions1");
    var answer2 = document.getElementById("Assumptions2"); 
    var answer4 = document.getElementById("Assumptions4"); 
    if((answer1.value =="a1") && (answer2.value =="b2") && (jQuery('#fourth').attr('data-click-state') == 1) && (answer4.value =="d2") ){
        jQuery("#nineteenth").show();
         jQuery(this).css('border', '2px solid green');
         jQuery("#eighth").css('border', '2px solid green');
         jQuery("#eighth").css('background-color', '#90EE90');
         jQuery('.btn_icon').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Cancel 1st, 2nd & 4th term. Then, attribute the correct assumptions</p></span>');
        
         
    } else{
        jQuery(".final").hide();jQuery("#nineteenth").hide();
        jQuery(this).css('border', '2px solid red');
        jQuery("#eighth").css('border', '2px solid red');
        jQuery("#eighth").css('background-color', '#FFB6C1');
        jQuery('.btn_icon').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Cancel 1st, 2nd & 4th term. Then, attribute the correct assumptions</p></span>');
        
    }
	


	var answer = document.getElementById("Assumptions1");
	if (answer.value == "a1") {
	jQuery("#Assumptions1").css( 'border', 'solid green');
	jQuery('#ninth').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Steady Flow and hence \\({{\\partial *} \\over {\\partial t}} = 0\\)</p></span>');
    jQuery('#ninth').css('font-size', '8px');
    document.getElementById("ninth").style.visibility = "visible";
    MathJax.startup.defaultReady();
	}
    
    else if (answer.value == "s2") {
    }

    else{
		jQuery("#Assumptions1").css( 'border', 'solid red');
		jQuery('#ninth').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Steady Flow and hence \\({{\\partial *} \\over {\\partial t}} = 0\\)</p></span>');
		jQuery('#ninth').css('font-size', '8px');
        document.getElementById("ninth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}
	  
	
	var answer = document.getElementById("Assumptions2");
	if (answer.value == "b2") {
		jQuery("#Assumptions2").css( 'border', 'solid green');
		jQuery('#tenth').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Uniform flow in x direction and hence \\({{\\partial *} \\over {\\partial x}} = 0\\) </p></span>');
		jQuery('#tenth').css('font-size', '8px');
        document.getElementById("tenth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}

    else if (answer.value == "s2") {
    }

    else{
		jQuery("#Assumptions2").css( 'border', 'solid red');
		jQuery('#tenth').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Uniform flow in x direction and hence \\({{\\partial *} \\over {\\partial x}} = 0\\)</p></span>');
		jQuery('#tenth').css('font-size', '8px');
        document.getElementById("tenth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}
	  
	
	var answer = document.getElementById("Assumptions3");
	if (answer.value == "c2") {
		jQuery("#Assumptions3").css( 'border', 'solid red');
		jQuery('#eleventh').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> No cancellation needed</p></span>');
		jQuery('#eleventh').css('font-size', '8px');
        document.getElementById("eleventh").style.visibility = "visible";
	}

    else if (answer.value == "s2") {
    }

    else{
		jQuery("#Assumptions3").css( 'border', 'solid red');
		jQuery('#eleventh').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> No cancellation needed</p></span>');
		jQuery('#eleventh').css('font-size', '8px');
        document.getElementById("eleventh").style.visibility = "visible";
	
	}
	  
	
	var answer = document.getElementById("Assumptions4");
	if (answer.value == "d2") {
		jQuery("#Assumptions4").css( 'border', 'solid green');
		jQuery('#twelfth').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Uniform flow in z direction and hence \\({{\\partial *} \\over {\\partial z}} = 0\\)</p></span>');
		jQuery('#twelfth').css('font-size', '8px');
        document.getElementById("twelfth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}

    else if (answer.value == "s2") {
    }

    else{
		jQuery("#Assumptions4").css( 'border', 'solid red');
		jQuery('#twelfth').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Uniform flow in z direction and hence \\({{\\partial *} \\over {\\partial z}} = 0\\)</p></span>');
		jQuery('#twelfth').css('font-size', '8px');
        document.getElementById("twelfth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}
	 $('.tooltip').show();
	  
	  
});



	$('.flow_btn button').click( function(){ flow_checkbox(); } );



}, 1000);




	function flow_checkbox() {
		secound_section = 1;
		checkbox1_check = 0;
		checkbox2_check = 0;
		checkbox3_check = 0;
		checkbox4_check = 0;


	  var checkBox1 = document.getElementById("checkbox1");
	  var text1 = document.getElementById("thirteenth");
	  if (checkBox1.checked == true){
		text1.style.visibility = "visible";		
		jQuery('#thirteenth').html('<span class="relative"><span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Assumption given in the question</p></span></span>');		
		//jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
		jQuery('#seventeenth').css("font-size", "16px");
		MathJax.startup.defaultReady();
		if(checkbox1_check == 0){
			secound_section += 1;
			checkbox1_check = 1;
		}
	  } else {
		 text1.style.visibility = "visible";
		 jQuery('#thirteenth').html('<span class="relative"><span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip">This assumption is given in the question</p></span></span>');
		 //jQuery('#seventeenth').html("\\(v = v(x,y,z,t)\\phantom{\\cancelto{0}{t}}\\)")
		 MathJax.startup.defaultReady();
		 
		 if(checkbox1_check == 1){
			secound_section -= 1;
			checkbox1_check = 0;
		}
	  }
	  
	  
	  
	  var checkBox2 = document.getElementById("checkbox2");
	  var text2 = document.getElementById("fourteenth");
	  if (checkBox2.checked == true){
		text2.style.visibility = "visible";
		jQuery('#fourteenth').html('<span class="relative"><span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Assumption given in the question </p></span></span>');
		//jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
		jQuery('#seventeenth').css("font-size", "16px");
		MathJax.startup.defaultReady();
		
		if(checkbox2_check == 0){
			secound_section += 1;
			checkbox2_check = 1;
		}
	  } else {
		 text2.style.visibility = "visible";
		 jQuery('#fourteenth').html('<span class="relative"><span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip">This assumption is given in the question</p></span></span>');
		 //jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
		 MathJax.startup.defaultReady();
		 if(checkbox2_check == 1){
			secound_section -= 1;
			checkbox2_check = 0;
		}
	  }
	  
	  
		var checkBox3 = document.getElementById("checkbox3");
	  var text3 = document.getElementById("fifteenth");
	  if (checkBox3.checked == true){
		text3.style.visibility = "visible";		
		jQuery('#fifteenth').html('<span class="relative"><span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip">No relevant assumption given in the question</p></span></span>');		
		if(checkbox3_check == 0){
			secound_section -= 1;
			checkbox3_check = 1;
		}
	  } else {
		 text3.style.visibility = "visible";
		 jQuery('#fifteenth').html('<span class="relative"><span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></span></p><p class="contant_tooltip"><b>Correct Answer:</b> This assumption is not given in the question</p></span></span>');
		if(checkbox3_check == 1){
			secound_section += 1;
			checkbox3_check = 0;
		}
		
	  }  
	  
	  
	  
		var checkBox4 = document.getElementById("checkbox4");
	  var text4 = document.getElementById("sixteenth");
	  if (checkBox4.checked == true){
		text4.style.visibility = "visible";		
		jQuery('#sixteenth').html('<span class="relative"><span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Assumption given in the question</p></span></span>');
	   // jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
		jQuery('#seventeenth').css("font-size", "16px");
		MathJax.startup.defaultReady();
		
		if(checkbox4_check == 0){
			secound_section += 1;
			checkbox4_check = 1;
		}
	  } else {
		 text4.style.visibility = "visible";
		 jQuery('#sixteenth').html('<span class="relative"><span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip">This assumption is given in the question</p></span></span>');
			 //jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
		MathJax.startup.defaultReady();
		
		if(checkbox4_check == 1){
			secound_section -= 1;
			checkbox4_check = 0;
		}
	  }
		
	  
		if(secound_section == 4){
		    jQuery(".final").show();   
			jQuery('.flow_btn button').css('border', '2px solid green');
			jQuery('.flow_btn_icon').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Flow is steady, fully developed in x and z</p></span>');
		} else{
			jQuery(".final").hide();  
			jQuery('.flow_btn button').css( 'border', 'solid red');
			jQuery('.flow_btn_icon').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Flow is steady, fully developed in x and z</p></span>');
		}
	   

	}


