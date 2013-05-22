(function(utils, $) {
  var Study = {
    portletId : "UIStudyPortlet",
    init : function(elm) {
      if (elm && String(elm).length > 0) {
        this.portletId = String(elm);
      }
      utils.onResize(Study.onResizeMarkLayer);    
      Study.showPopupInfo();
     
    },   
    onResizeMarkLayer : function() {
    	utils.setMaskLayer(Study.portletId);
    },
    showPopupInfo : function() {
    	//show User's infos
    	var items = $('.item');
    	function closePopup(evt) {
    		var popup = $('.infoPopup:first');
    		popup.hide(300).removeClass('visible').addClass('invisible').html(''); 
    	}
    	items.find('img:first').off('click').on('click', function(evt) {
    		var popup = $('.infoPopup:first')
    		if(popup.length === 0) {
    			popup = $('<div id="popup" class="popupInfo infoPopup"></div>');
    			$('.mainContainer:first').append(popup);
    		}
    		popup.hide().html('');
    		var thiz = $(this);
    		var parent = thiz.parents('.item:first');
    		popup.append(parent.clone());        
    		popup.find('button:first').on('click', closePopup).html('Close');        
    		popup.css({'top': (evt.pageY - 40) + 'px', 'left': (evt.pageX - 250) + 'px'});        
    		popup.removeClass('invisible').addClass('visible').show(300); 
    	});
    }
  };
  return Study;
})(utils, gj);
