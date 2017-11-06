jQuery(document).ready(function(){
    function translate(arg){
        var s = jQuery(arg).text().trim();
        jQuery.ajax({ 
            type:'POST',
            url:'action.php',
            dataType:'json',
            data:{t:s},
            success:function(data){
                if(data == null){
                    jQuery(arg).text("待翻译");
                }else{
                    jQuery(arg).text(data);  
                }                            
            }
        });
    }
    translate("#ontFormFindName table td option");
    translate("#tabNavigate div");
    translate("#tabFind div");
    translate("#viewMode-Project");
    translate(".queryLabel");
    translate("#ontFindDisp a");
    translate(".first-child button");
    translate("#topBar a:lt(2)");
    translate("#topBar a:gt(2)");
    translate("#runBoxText");
    translate("#queryPanelTitle1");
    translate("#queryTiming-button");
    translate("#addDefineGroup");
    translate("#removeDefineGroup");
    translate(".queryBalloon");
    jQuery(".tabBox div").each(function(){
        translate(this);
    });
    jQuery("#ontFormFindName option").each(function(){
        translate(this);
    });
    jQuery("#newBox a").each(function(){
        translate(this);
    });
    jQuery(".qryButtonDate a").each(function(){
        translate(this);
    });
    jQuery(".qryButtonExclude a").each(function(){
        translate(this);
    });
    jQuery("#menubutton1select option").each(function(){
        translate(this);
    });
    jQuery("#anaPluginView option").each(function(){
        translate(this);
    });
    jQuery(".yui-nav li a").each(function(){
        translate(this);
    });
});