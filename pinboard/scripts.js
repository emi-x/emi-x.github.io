var nameElement = document.getElementById("usernameInput")
var factionElement = document.getElementById("factionInput")
var tagColorElement = document.getElementById("tagHex")
var themeElement = document.getElementById("themeSetting")

function updateName() {
	var spans = document.getElementsByTagName("span");
	var name = nameElement.value;
	for (var i=0;i<spans.length;i++) {
		if (spans[i].className.includes('user')) {
			spans[i].innerHTML = name
		}
	};
}

function updateTag() {
	var spans = document.getElementsByTagName("span");
	var tag = factionElement.value;
	for (var i=0;i<spans.length;i++) {
		if (spans[i].className.includes('faction-tag')) {
			spans[i].innerHTML = "[" + tag + "]"
		}
	};
}

function updateColor() {
  var re = /[0-9A-Fa-f]{6}/g;
  var inputString = tagColorElement.value;

  if(re.test(inputString)) {
	var color = 'span.faction-tag{color: #' + inputString + "}";
    document.getElementById('factionTagColor').innerHTML = color;
  } else {
    alert('invalid hex code');
  }
}

function updateTheme() {
    var theme = themeElement.value;
	document.getElementById("pageTheme").href = "css/" + theme;
}

tagColorElement.onchange = function() {
	updateColor();
}

nameElement.onchange = function() {
	updateName();
}

factionElement.onchange = function() {
	updateTag();
}

themeElement.onchange = function() {
	updateTheme();
}

window.onload = function() {
	updateName();
	updateTag();
	updateColor();
}
