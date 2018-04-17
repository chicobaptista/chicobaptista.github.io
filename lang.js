var langs = ['en', 'pt'];
var langCode = '';
var langJS = null;


var translate = function (jsdata)
{	
	console.log('Function called')
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	    console.log('strTr is: '+strTr)
	});
}


langCode = navigator.language.substr (0, 2);
console.log('langCode is: '+langCode)

if (langCode in langs)
	$.getJSON('lang/'+langCode+'.json', translate);
else
	$.getJSON('lang/pt.json', translate);