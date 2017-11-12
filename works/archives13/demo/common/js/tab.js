var movieSwitch = function(mode)
	{
		if(mode == 1)
		{
			jQuery('#page1').show();
			jQuery('#page2').hide();
			jQuery('#page3').hide();
			jQuery('#page4').hide();
			jQuery('#page5').hide();

		}
		if(mode == 2)
		{
			jQuery('#page1').hide();
			jQuery('#page2').show();
			jQuery('#page3').hide();
			jQuery('#page4').hide();
			jQuery('#page5').hide();
		}
		if(mode == 3)
		{
			jQuery('#page1').hide();
			jQuery('#page2').hide();
			jQuery('#page3').show();
			jQuery('#page4').hide();
			jQuery('#page5').hide();
		}
		if(mode == 4)
		{
			jQuery('#page1').hide();
			jQuery('#page2').hide();
			jQuery('#page3').hide();
			jQuery('#page4').show();
			jQuery('#page5').hide();
		}
		if(mode == 5)
		{
			jQuery('#page1').hide();
			jQuery('#page2').hide();
			jQuery('#page3').hide();
			jQuery('#page4').hide();
			jQuery('#page5').show();
		}




	}
