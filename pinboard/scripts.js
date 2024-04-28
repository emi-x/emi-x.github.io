var nameElement = document.getElementById("usernameInput")
var factionElement = document.getElementById("factionInput")
var themeElement = document.getElementById("themeSetting")
var pinBadgeElement = document.getElementById("pinsBadge")
var tagColor = document.getElementById("tagColor")

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

function updateColor(event) {
  color = tagColor.value;
  document.getElementById('factionTagColor').innerHTML = 'span.faction-tag{color: ' + color + "}";
}

function updateTheme() {
    var theme = themeElement.value;
	document.getElementById("pageTheme").href = "css/" + theme;
}

function updatePinBadge() {
	var spans = document.getElementsByTagName("span");
	var badge = pinBadgeElement.value
	if (badge!=0){
		for (var i=0;i<spans.length;i++) {
			if (spans[i].className.includes('pin-badge')) {
				spans[i].innerHTML = badge;
				spans[i].style = ""
			}
		}
	} else {
		for (var i=0;i<spans.length;i++) {
			if (spans[i].className.includes('pin-badge')) {
				spans[i].style = "display: none;"
			}
		}
	}
}

tagColor.addEventListener("input", updateColor, false);

nameElement.onchange = function() {
	updateName();
}

factionElement.onchange = function() {
	updateTag();
}

themeElement.onchange = function() {
	updateTheme();
}

pinBadgeElement.onchange = function() {
	updatePinBadge();
}

window.onload = function() {
	updateName();
	updateTag();
	updateColor();
	updatePinBadge();
}
