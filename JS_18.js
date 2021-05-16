var frame = 1;

jQuery(document).ready(function() {
         

  jQuery('#first').on('click', function() {
    frame = 1;
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#Assumptions2").css( 'border', '');
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#Assumptions4").css( 'border', '');
  jQuery('#ninth').css('visibility', 'hidden');
  jQuery('#tenth').css('visibility', 'hidden');
  jQuery('#eleventh').css('visibility', 'hidden');
  jQuery('#twelfth').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
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
    frame = 1;
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#Assumptions2").css( 'border', '');
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#Assumptions4").css( 'border', '');
  jQuery('#ninth').css('visibility', 'hidden');
  jQuery('#tenth').css('visibility', 'hidden');
  jQuery('#eleventh').css('visibility', 'hidden');
  jQuery('#twelfth').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
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
    frame = 1;
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#Assumptions2").css( 'border', '');
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#Assumptions4").css( 'border', '');
  jQuery('#ninth').css('visibility', 'hidden');
  jQuery('#tenth').css('visibility', 'hidden');
  jQuery('#eleventh').css('visibility', 'hidden');
  jQuery('#twelfth').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
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
    frame = 1;
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#Assumptions2").css( 'border', '');
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#Assumptions4").css( 'border', '');
  jQuery('#ninth').css('visibility', 'hidden');
  jQuery('#tenth').css('visibility', 'hidden');
  jQuery('#eleventh').css('visibility', 'hidden');
  jQuery('#twelfth').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
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
    frame = 1;
  var answer = document.getElementById("Assumptions1");
  document.getElementById("ninth").style.visibility = "hidden";
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#Assumptions2").css( 'border', '');
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#Assumptions4").css( 'border', '');
  jQuery('#ninth').css('visibility', 'hidden');
  jQuery('#tenth').css('visibility', 'hidden');
  jQuery('#eleventh').css('visibility', 'hidden');
  jQuery('#twelfth').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery(".final").hide();jQuery("#nineteenth").hide();
});


jQuery("#Assumptions2").select().on("change", function() {
    frame = 1;
  var answer = document.getElementById("Assumptions2");
  document.getElementById("tenth").style.visibility = "hidden";
  jQuery("#Assumptions2").css( 'border', ''); 
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#Assumptions2").css( 'border', '');
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#Assumptions4").css( 'border', '');
  jQuery('#ninth').css('visibility', 'hidden');
  jQuery('#tenth').css('visibility', 'hidden');
  jQuery('#eleventh').css('visibility', 'hidden');
  jQuery('#twelfth').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery(".final").hide();jQuery("#nineteenth").hide();
});

jQuery("#Assumptions3").select().on("change", function() {
    frame = 1;
  var answer = document.getElementById("Assumptions3");
  document.getElementById("eleventh").style.visibility = "hidden";
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#Assumptions2").css( 'border', '');
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#Assumptions4").css( 'border', '');
  jQuery('#ninth').css('visibility', 'hidden');
  jQuery('#tenth').css('visibility', 'hidden');
  jQuery('#eleventh').css('visibility', 'hidden');
  jQuery('#twelfth').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery(".final").hide();jQuery("#nineteenth").hide();
});


jQuery("#Assumptions4").select().on("change", function() {
    frame = 1;
document.getElementById("twelfth").style.visibility = "hidden";
jQuery("#Assumptions4").css( 'border', '');
var answer = document.getElementById("Assumptions4");
  jQuery("#eighth").css('border', '2px solid grey');
  jQuery("#eighth").css('background-color', '#D3D3D3');
  jQuery('.btn_icon').css('visibility', 'hidden');
  jQuery("#Assumptions1").css( 'border', '');
  jQuery("#Assumptions2").css( 'border', '');
  jQuery("#Assumptions3").css( 'border', '');
  jQuery("#Assumptions4").css( 'border', '');
  jQuery('#ninth').css('visibility', 'hidden');
  jQuery('#tenth').css('visibility', 'hidden');
  jQuery('#eleventh').css('visibility', 'hidden');
  jQuery('#twelfth').css('visibility', 'hidden');
  jQuery('#ans_btn').css('visibility', 'visible');
  jQuery(".final").hide();jQuery("#nineteenth").hide();
});



});


	


function addclass() {
	var element = document.getElementById("seventeenth");
	element.classList.add("mystyle");
}


function myFunction1() {
    frame = 2;
  var checkBox1 = document.getElementById("checkbox1");
  var checkBox2 = document.getElementById("checkbox2");
  var checkBox3 = document.getElementById("checkbox3");
  var checkBox4 = document.getElementById("checkbox4");
  jQuery('.flow_btn_icon').css('visibility', 'hidden');
  jQuery('.flow_btn_special').css('visibility', 'visible');
  jQuery('#thirteenth').css('visibility', 'hidden');
  jQuery('#fourteenth').css('visibility', 'hidden');
  jQuery('#fifteenth').css('visibility', 'hidden');
  jQuery('#sixteenth').css('visibility', 'hidden');
  jQuery("#seventeenth").css('border', '2px solid grey');
  jQuery("#seventeenth").css('background-color', '#D3D3D3');
  jQuery("#nineteenth_check .output_box").css('visibility', 'hidden');
  jQuery(".final").hide(); 
  
  
  
        if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0100 step2   
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0010 step3   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0001 step4   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1100 step5
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1010 step6
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1001 step7
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0110 step8
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0101 step9
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0011 step10
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 1110 step11
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1101 step12
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1011 step13
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0111 step14  x y z
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1111 step15  x y z t
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},\\cancel{z},\\cancel{t})\\)");
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
    frame = 2;
  var checkBox1 = document.getElementById("checkbox1");
  var checkBox2 = document.getElementById("checkbox2");
  var checkBox3 = document.getElementById("checkbox3");
  var checkBox4 = document.getElementById("checkbox4");
  jQuery('.flow_btn_special').css('visibility', 'visible');
  jQuery('.flow_btn_icon').css('visibility', 'hidden');
  jQuery('#thirteenth').css('visibility', 'hidden');
  jQuery('#fourteenth').css('visibility', 'hidden');
  jQuery('#fifteenth').css('visibility', 'hidden');
  jQuery('#sixteenth').css('visibility', 'hidden');
    jQuery("#seventeenth").css('border', '2px solid grey');
  jQuery("#seventeenth").css('background-color', '#D3D3D3');
  jQuery("#nineteenth_check .output_box").css('visibility', 'hidden');
  jQuery(".final").hide(); 

  
        if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0100 step2   
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0010 step3   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0001 step4   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1100 step5
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1010 step6
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1001 step7
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0110 step8
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0101 step9
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0011 step10
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 1110 step11
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1101 step12
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1011 step13
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0111 step14  x y z
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1111 step15  x y z t
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},\\cancel{z},\\cancel{t})\\)");
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
    frame = 2;
  var checkBox1 = document.getElementById("checkbox1");
  var checkBox2 = document.getElementById("checkbox2");
  var checkBox3 = document.getElementById("checkbox3");
  var checkBox4 = document.getElementById("checkbox4");
  jQuery('.flow_btn_special').css('visibility', 'visible');
  jQuery('.flow_btn_icon').css('visibility', 'hidden');
  jQuery('#thirteenth').css('visibility', 'hidden');
  jQuery('#fourteenth').css('visibility', 'hidden');
  jQuery('#fifteenth').css('visibility', 'hidden');
  jQuery('#sixteenth').css('visibility', 'hidden');
    jQuery("#seventeenth").css('border', '2px solid grey');
  jQuery("#seventeenth").css('background-color', '#D3D3D3');
  jQuery("#nineteenth_check .output_box").css('visibility', 'hidden');
  jQuery(".final").hide(); 
  
        if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0100 step2   
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0010 step3   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0001 step4   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1100 step5
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1010 step6
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1001 step7
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0110 step8
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0101 step9
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0011 step10
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 1110 step11
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1101 step12
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1011 step13
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0111 step14  x y z
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1111 step15  x y z t
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},\\cancel{z},\\cancel{t})\\)");
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
    frame = 2;
  var checkBox1 = document.getElementById("checkbox1");
  var checkBox2 = document.getElementById("checkbox2");
  var checkBox3 = document.getElementById("checkbox3");
  var checkBox4 = document.getElementById("checkbox4");
  jQuery('.flow_btn_special').css('visibility', 'visible');
  jQuery('.flow_btn_icon').css('visibility', 'hidden');
  jQuery('#thirteenth').css('visibility', 'hidden');
  jQuery('#fourteenth').css('visibility', 'hidden');
  jQuery('#fifteenth').css('visibility', 'visible');
  jQuery('#sixteenth').css('visibility', 'hidden');
  jQuery("#seventeenth").css('border', '2px solid grey');
  jQuery("#seventeenth").css('background-color', '#D3D3D3');
  jQuery("#nineteenth_check .output_box").css('visibility', 'hidden');
  jQuery(".final").hide(); 
  
        if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0100 step2   
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0010 step3   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0001 step4   
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1100 step5
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1010 step6
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1001 step7
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,y,\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0110 step8
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},z,t)\\)");
            MathJax.startup.defaultReady();
        }
        // 0101 step9
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 0011 step10
        else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        
        // 1110 step11
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == false ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},z,\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1101 step12
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == false && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 1011 step13
        else if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(x,\\cancel{y},\\cancel{z},\\cancel{t})\\)");
            MathJax.startup.defaultReady();
        }
        // 0111 step14  x y z
        else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},\\cancel{z},t)\\)");
            MathJax.startup.defaultReady();
        }
        // 1111 step15  x y z t
        else if(checkBox1.checked == true && checkBox2.checked == true && checkBox3.checked == true && checkBox4.checked == true ){
            jQuery('#seventeenth').html("\\(v = v(\\cancel{x},\\cancel{y},\\cancel{z},\\cancel{t})\\)");
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
         frame = 2;
         jQuery("#eighth").css('border', '2px solid green');
         jQuery("#eighth").css('background-color', '#90EE90');
         jQuery('.btn_icon').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Cancel the 1st, 2nd & 4th term. Then, attribute the correct assumptions respectively</p></span>');
         jQuery('.btn_icon').css('visibility', 'visible');
         jQuery('#ans_btn').css('visibility', 'hidden');
         
    } else{
        jQuery(".final").hide();jQuery("#nineteenth").hide();
        
        jQuery("#eighth").css('border', '2px solid red');
        jQuery("#eighth").css('background-color', '#FFB6C1');
        jQuery('.btn_icon').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Cancel the 1st, 2nd & 4th term, then, attribute the correct assumptions respectively</p></span>');
        jQuery('.btn_icon').css('visibility', 'visible');
        jQuery("#ans_btn").css('visibility', 'hidden');
    }    



	var answer = document.getElementById("Assumptions1");
	if (answer.value == "a1") {
	jQuery("#Assumptions1").css( 'border-color', '#90EE90');
	jQuery('#ninth').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Steady Flow and hence \\({{\\partial *} \\over {\\partial t}} = 0\\)</p></span>');
    jQuery('#ninth').css('font-size', '8px');
    document.getElementById("ninth").style.visibility = "visible";
    MathJax.startup.defaultReady();
	}
    
    else if (answer.value == "s2") {
    }

    else{
		jQuery("#Assumptions1").css( 'border-color', 'red');
		jQuery('#ninth').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Steady Flow and hence \\({{\\partial *} \\over {\\partial t}} = 0\\)</p></span>');
		jQuery('#ninth').css('font-size', '8px');
        document.getElementById("ninth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}
	  
	
	var answer = document.getElementById("Assumptions2");
	if (answer.value == "b2") {
		jQuery("#Assumptions2").css('border-color', '#90EE90');
		jQuery('#tenth').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Uniform flow in x direction and hence \\({{\\partial *} \\over {\\partial x}} = 0\\) </p></span>');
		jQuery('#tenth').css('font-size', '8px');
        document.getElementById("tenth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}

    else if (answer.value == "s2") {
    }

    else{
		jQuery("#Assumptions2").css('border-color', 'red');
		jQuery('#tenth').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Uniform flow in x direction and hence \\({{\\partial *} \\over {\\partial x}} = 0\\)</p></span>');
		jQuery('#tenth').css('font-size', '8px');
        document.getElementById("tenth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}
	  
	
	var answer = document.getElementById("Assumptions3");
	if (answer.value == "c2") {
		jQuery("#Assumptions3").css('border-color', 'red');
		jQuery('#eleventh').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> No cancellation needed</p></span>');
		jQuery('#eleventh').css('font-size', '8px');
        document.getElementById("eleventh").style.visibility = "visible";
	}

    else if (answer.value == "s2") {
    }

    else{
		jQuery("#Assumptions3").css('border-color', 'red');
		jQuery('#eleventh').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> No cancellation needed</p></span>');
		jQuery('#eleventh').css('font-size', '8px');
        document.getElementById("eleventh").style.visibility = "visible";
	
	}
	  
	
	var answer = document.getElementById("Assumptions4");
	if (answer.value == "d2") {
		jQuery("#Assumptions4").css('border-color', '#90EE90');
		jQuery('#twelfth').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span> <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Uniform flow in z direction and hence \\({{\\partial *} \\over {\\partial z}} = 0\\)</p></span>');
		jQuery('#twelfth').css('font-size', '8px');
        document.getElementById("twelfth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}

    else if (answer.value == "s2") {
    }

    else{
		jQuery("#Assumptions4").css('border-color', 'red');
		jQuery('#twelfth').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Uniform flow in z direction and hence \\({{\\partial *} \\over {\\partial z}} = 0\\)</p></span>');
		jQuery('#twelfth').css('font-size', '8px');
        document.getElementById("twelfth").style.visibility = "visible";
        MathJax.startup.defaultReady();
	}
	 jQuery('.tooltip').show();
	  
	  
});





jQuery('.flow_btn button').click( function(){ flow_checkbox(); } );

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
		text1.style.visibility = "hidden";		
		
		//jQuery('#seventeenth').html("\\(v = v(x,y,z,\\cancelto{0}{t})\\)");
		
		MathJax.startup.defaultReady();
		if(checkbox1_check == 0){
			secound_section += 1;
			checkbox1_check = 1;
		}
	  } else {
		 text1.style.visibility = "hidden";
		
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
		text2.style.visibility = "hidden";
		
		//jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
		MathJax.startup.defaultReady();
		
		if(checkbox2_check == 0){
			secound_section += 1;
			checkbox2_check = 1;
		}
	  } else {
		 text2.style.visibility = "hidden";
		 
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
		
		if(checkbox3_check == 0){
			secound_section -= 1;
			checkbox3_check = 1;
		}
	  } else {
		 text3.style.visibility = "visible";
		 
		if(checkbox3_check == 1){
			secound_section += 1;
			checkbox3_check = 0;
		}
		
	  }  
	  
	  
	  
		var checkBox4 = document.getElementById("checkbox4");
	  var text4 = document.getElementById("sixteenth");
	  if (checkBox4.checked == true){
		text4.style.visibility = "hidden";		
		
	   // jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,\\cancelto{0}{z},\\cancelto{0}{t})\\)");
		MathJax.startup.defaultReady();
		
		if(checkbox4_check == 0){
			secound_section += 1;
			checkbox4_check = 1;
		}
	  } else {
		 text4.style.visibility = "hidden";
		 
			 //jQuery('#seventeenth').html("\\(v = v(\\cancelto{0}{x},y,z,\\cancelto{0}{t})\\)");
		MathJax.startup.defaultReady();
		
		if(checkbox4_check == 1){
			secound_section -= 1;
			checkbox4_check = 0;
		}
	  }
		
	  console.log(secound_section);
		if(secound_section == 4){
		    jQuery(".final").show();   
			frame = 3;
			jQuery('.flow_btn_icon').html('<span><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Correct <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Flow is steady, uniform in x and z direction</p></span>');
		jQuery('.btn_icon').css('visibility', 'visible');
        jQuery('#ans_btn').css('visibility', 'hidden');
        jQuery('.flow_btn_special').css('visibility', 'hidden');
        jQuery('.flow_btn_icon').css('visibility', 'visible');
        jQuery("#seventeenth").css('border', '2px solid green');
        jQuery("#seventeenth").css('background-color', '#90EE90');
        jQuery("#nineteenth_check img").attr("src","https://whytowiki.com/scion/public/check.svg");
		jQuery("#nineteenth_check .output_box").css('border', '2px solid #90EE90');
		jQuery("#nineteenth_check").css('display', 'block');
        jQuery("#nineteenth_check .output_box").css('visibility', 'visible');
		
        } else{
            frame = 2;
		jQuery(".final").hide();  	
		jQuery('.flow_btn_icon').html('<span><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span>  <span class="tooltip__content"><p class="tooltip_header">Incorrect <span class="tooltip_img"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip"><b>Correct Answer:</b> Flow is steady, uniform in x and z direction</p></span>');
		jQuery('.btn_icon').css('visibility', 'visible');
        jQuery('#ans_btn').css('visibility', 'hidden');
        jQuery('.flow_btn_special').css('visibility', 'hidden');
        jQuery('.flow_btn_icon').css('visibility', 'visible');
        jQuery("#seventeenth").css('border', '2px solid red');
        jQuery("#seventeenth").css('background-color', '#FFB6C1');
		 jQuery("#nineteenth_check img").attr("src","https://whytowiki.com/scion/public/remove.svg");
		 jQuery("#nineteenth_check .output_box").css('border', '2px solid red');
         jQuery("#nineteenth_check").css('display', 'block');
       jQuery("#nineteenth_check .output_box").css('visibility', 'visible');
        }
	   



	}



document.getElementById("check-final").addEventListener("click",function(){
    var flux1 = document.getElementById("flux1").value;
    var flux2 = document.getElementById("flux2").value;
    if(parseFloat(flux1) == 0 || flux1 == "h"){
        document.getElementById("image1").src = "https://whytowiki.com/scion/public/check.svg";
        document.getElementById("image1").style.display = "inline-block";
        document.getElementById("flux1-div").style.border = "2px solid #90EE90";
        document.getElementsByClassName("tooltip1")[0].innerHTML = '<span class="tooltip__content1"><p class="tooltip_header1">Correct <span class="tooltip_img1"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip1"><b>Correct Answer:</b> 0 or h</p></span>';
    jQuery("#check-final").css('visibility', 'visible');
    }
    else{
        document.getElementById("image1").src = "https://whytowiki.com/scion/public/remove.svg";
        document.getElementById("image1").style.display = "inline-block";
        document.getElementById("flux1-div").style.border = "2px solid red";
        document.getElementsByClassName("tooltip1")[0].innerHTML = '<span class="tooltip__content1"><p class="tooltip_header1">Incorrect <span class="tooltip_img1"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip1"><b>Correct Answer:</b> 0 or h</p></span>';
    }

    if(parseFloat(flux2) == 0){
        document.getElementById("image2").src = "https://whytowiki.com/scion/public/check.svg";
        document.getElementById("image2").style.display = "inline-block";
        document.getElementById("flux2-div").style.border = "2px solid #90EE90";
        document.getElementsByClassName("tooltip2")[0].innerHTML = '<span class="tooltip__content2"><p class="tooltip_header2">Correct <span class="tooltip_img2"><img src="https://whytowiki.com/scion/public/check.svg" class="icon_img"/></span></p><p class="contant_tooltip2"><b>Correct Answer:</b> 0</p></span>';
    jQuery("#check-final").css('visibility', 'visible');
    }
    else{
        document.getElementById("image2").src = "https://whytowiki.com/scion/public/remove.svg";
        document.getElementById("image2").style.display = "inline-block";
        document.getElementById("flux2-div").style.border = "2px solid red";
        document.getElementsByClassName("tooltip2")[0].innerHTML = '<span class="tooltip__content2"><p class="tooltip_header2">Incorrect <span class="tooltip_img2"><img src="https://whytowiki.com/scion/public/remove.svg" class="icon_img"/></span></p><p class="contant_tooltip2"><b>Correct Answer:</b> 0</p></span>';
    }

    if((parseFloat(flux1) == 0 || flux1 == "h" )&& parseFloat(flux2) == 0){
        document.getElementById("output-text").style.visibility = "visible";
        jQuery("#check-final").css('visibility', 'hidden');
        document.getElementById("output-text").style.display = "inline-block";
        frame = 4;
    }
    else{
        jQuery("#check-final").css('visibility', 'visible');
        jQuery("#check-final").css('visibility', 'hidden');
        document.getElementById("output-text").style.visibility = "hidden";
    }
});

document.getElementById("flux1-div").addEventListener("click",function(){
jQuery("#check-final").css('visibility', 'visible');
document.getElementById("output-text").style.visibility = "hidden";
document.getElementById("flux1-div").style.border = "";
document.getElementById("image1").style.display = "none";
document.getElementById("flux2-div").style.border = "";
document.getElementById("image2").style.display = "none";
frame = 3;
});

document.getElementById("flux2-div").addEventListener("click",function(){
jQuery("#check-final").css('visibility', 'visible');
document.getElementById("output-text").style.visibility = "hidden";
document.getElementById("flux1-div").style.border = "";
document.getElementById("image1").style.display = "none";
document.getElementById("flux2-div").style.border = "";
document.getElementById("image2").style.display = "none";
frame = 3;
});









document.getElementById("image1").addEventListener("mouseenter",function(){
    document.getElementsByClassName("tooltip1")[0].style.display = "block";
});

document.getElementById("image1").addEventListener("mouseout",function(){
    document.getElementsByClassName("tooltip1")[0].style.display = "none";
});

document.getElementById("image2").addEventListener("mouseenter",function(){
    document.getElementsByClassName("tooltip2")[0].style.display = "block";
});

document.getElementById("image2").addEventListener("mouseout",function(){
    document.getElementsByClassName("tooltip2")[0].style.display = "none";
});



document.getElementById("previous-btn").disabled = true;
document.getElementById("previous-btn").style.opacity = "0.7";

document.body.addEventListener("click",function(){
    if(frame == 1){
        document.getElementById("previous-btn").disabled = true;
        document.getElementById("previous-btn").style.opacity = "0.7";
        document.getElementById("next-btn").disabled = false;
        document.getElementById("next-btn").style.opacity = "1";
        document.getElementById("showAll-btn").disabled = false;
        document.getElementById("showAll-btn").style.opacity = "1";
    }
    else if(frame == 2){
        document.getElementById("previous-btn").disabled = false;
        document.getElementById("previous-btn").style.opacity = "1";
        document.getElementById("next-btn").disabled = false;
        document.getElementById("next-btn").style.opacity = "1";
        document.getElementById("showAll-btn").disabled = false;
        document.getElementById("showAll-btn").style.opacity = "1";
    }
    else if(frame == 3){
        document.getElementById("previous-btn").disabled = false;
        document.getElementById("previous-btn").style.opacity = "1";
        document.getElementById("next-btn").disabled = false;
        document.getElementById("next-btn").style.opacity = "1";
        document.getElementById("showAll-btn").disabled = false;
        document.getElementById("showAll-btn").style.opacity = "1";
    }
    else if(frame == 4){
        document.getElementById("previous-btn").disabled = false;
        document.getElementById("previous-btn").style.opacity = "1";
        document.getElementById("next-btn").disabled = true;
        document.getElementById("next-btn").style.opacity = "0.7";
        document.getElementById("showAll-btn").disabled = true;
        document.getElementById("showAll-btn").style.opacity = "1";
    }
});

document.getElementById("next-btn").addEventListener("click",function(){
    if(frame == 1){
        if(jQuery('#first').attr('data-click-state') == 0){
            document.getElementById("first").click();
        }
        if(jQuery('#third').attr('data-click-state') == 0){
            document.getElementById("third").click();
        }
        if(jQuery('#fourth').attr('data-click-state') == 0){
            document.getElementById("fourth").click();
        }
        if(jQuery('#sixth').attr('data-click-state') == 0){
            document.getElementById("sixth").click();
        }
        document.getElementById("first").click();
        document.getElementById("third").click();
        document.getElementById("sixth").click();
        document.getElementById("Assumptions1").value = "a1";
        document.getElementById("Assumptions2").value = "b2";
        document.getElementById("Assumptions4").value = "d2";
        document.getElementById("ans_btn").click();
    }
    else if(frame == 2){
        document.getElementById("checkbox1").checked = false;
        document.getElementById("checkbox2").checked = false;
        document.getElementById("checkbox3").checked = false;
        document.getElementById("checkbox4").checked = false;
        document.getElementById("checkbox1").checked = true;
        document.getElementById("checkbox2").checked = true;
        document.getElementById("checkbox4").checked = true;
        jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},\\cancel{t})\\)");
        MathJax.startup.defaultReady();
        document.getElementsByClassName("flow_btn_special")[0].click();
    }
    else if(frame == 3){
        document.getElementById("flux1").value = "0";
        document.getElementById("flux2").value = "0";
        document.getElementById("check-final").click();
    }
});

document.getElementById("previous-btn").addEventListener("click",function(){
    if(frame == 4){
        document.getElementById("flux1").value = "";
        document.getElementById("flux2").value = "";
        frame--;
        document.getElementById("flux1-div").style.border = "none";
        document.getElementById("flux2-div").style.border = "none";
        document.getElementById("image1").style.display = "none";
        document.getElementById("image2").style.display = "none";
        document.getElementById("output-text").style.display = "none";
        jQuery("#check-final").css('visibility', 'visible');
    }
    else if(frame == 3){
        document.getElementById("final").style.display = "none";
        frame--;
        document.getElementsByClassName("flow_btn_special")[0].style.visibility = "visible";
        document.getElementById("seventeenth").style.backgroundColor = "#D3D3D3";
        document.getElementById("seventeenth").style.border = "2px solid grey";
        document.getElementById("nineteenth_check").children[0].innerHTML = "";
        document.getElementsByClassName("output_box")[0].style.border = "none";
        document.getElementById("flow_btn").children[0].children[1].innerHTML = "";
        document.getElementById("checkbox1").checked = false;
        document.getElementById("checkbox2").checked = false;
        document.getElementById("checkbox3").checked = false;
        document.getElementById("checkbox4").checked = false;
        jQuery('#seventeenth').html("\\(v = v(x,y,z,t)\\)");
        MathJax.startup.defaultReady();
    }
    else if(frame == 2){
        jQuery("#nineteenth").hide();
        frame--;
        document.getElementsByClassName("btn_icon")[0].innerHTML = "";
        document.getElementById("ans_btn").style.visibility = "visible";
        document.getElementById("eighth").innerHTML = "\\({{\\partial \\rho} \\over {\\partial t}} +{{\\partial u} \\over {\\partial x}} + {{\\partial v} \\over {\\partial y}} + {{\\partial w} \\over {\\partial z}} = 0 \\vphantom{\\require{cancel}\\cancelto{0} {{\\partial \\rho} \\over {\\partial t}}}\\)";
        MathJax.startup.defaultReady();
        document.getElementById("eighth").style.backgroundColor = "#D3D3D3";
        document.getElementById("eighth").style.border = "2px solid grey";
        document.getElementById("first").click();
        document.getElementById("third").click();
        document.getElementById("sixth").click();
    }
});

document.getElementById("showAll-btn").addEventListener("click",function(){
    if(frame == 1){
        if(jQuery('#first').attr('data-click-state') == 0){
            document.getElementById("first").click();
        }
        if(jQuery('#third').attr('data-click-state') == 0){
            document.getElementById("third").click();
        }
        if(jQuery('#fourth').attr('data-click-state') == 0){
            document.getElementById("fourth").click();
        }
        if(jQuery('#sixth').attr('data-click-state') == 0){
            document.getElementById("sixth").click();
        }
        document.getElementById("first").click();
        document.getElementById("third").click();
        document.getElementById("sixth").click();
        document.getElementById("Assumptions1").value = "a1";
        document.getElementById("Assumptions2").value = "b2";
        document.getElementById("Assumptions4").value = "d2";
        document.getElementById("ans_btn").click();
        document.getElementById("checkbox1").checked = false;
        document.getElementById("checkbox2").checked = false;
        document.getElementById("checkbox3").checked = false;
        document.getElementById("checkbox4").checked = false;
        document.getElementById("checkbox1").checked = true;
        document.getElementById("checkbox2").checked = true;
        document.getElementById("checkbox4").checked = true;
        jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},\\cancel{t})\\)");
        MathJax.startup.defaultReady();
        document.getElementsByClassName("flow_btn_special")[0].click();
        document.getElementById("flux1").value = "0";
        document.getElementById("flux2").value = "0";
        document.getElementById("check-final").click();
    }
    else if(frame == 2){
        document.getElementById("checkbox1").checked = false;
        document.getElementById("checkbox2").checked = false;
        document.getElementById("checkbox3").checked = false;
        document.getElementById("checkbox4").checked = false;
        document.getElementById("checkbox1").checked = true;
        document.getElementById("checkbox2").checked = true;
        document.getElementById("checkbox4").checked = true;
        jQuery('#seventeenth').html("\\(v = v(\\cancel{x},y,\\cancel{z},\\cancel{t})\\)");
        MathJax.startup.defaultReady();
        document.getElementsByClassName("flow_btn_special")[0].click();
        document.getElementById("flux1").value = "0";
        document.getElementById("flux2").value = "0";
        document.getElementById("check-final").click();
    }
    else if(frame == 3){
        document.getElementById("flux1").value = "0";
        document.getElementById("flux2").value = "0";
        document.getElementById("check-final").click();
    }
});

document.getElementsByClassName("flow_btn_special")[0].addEventListener("click",function(){
    frame++;
});
