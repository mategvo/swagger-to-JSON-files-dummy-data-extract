// Scrapes Swagger documentation and inserts
// 1.Paste that in console: 

result = "";
jQuery.each($('.operation'), function(index,item) {

	var data = ""
	var el = $($($('.operation')[index]).find('.json')[0])[0]
	if(typeof el != "undefined"){
		data = JSON.stringify(JSON.parse(el.innerText.replace("'", '').replace("@", '').replace("+", '')),null,'\t')
	}

	var el = $($($('.operation')[index]).find('.path')[0])[0]
	if(typeof el != "undefined" && data != ""){
		var fileName = el.innerText.replace(/[^a-zA-Z0-9]+/g, "");
		result += "echo '"+data+"' >> "+fileName+".json;\n\n "
	}

})
console.log(result+'\n\n')

// 2.Copy the js log entry
// 3.CD in directory where you want the files to sit 
// 4.paste the js log entry.