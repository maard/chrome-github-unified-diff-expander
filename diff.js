function setWideDiff() {
	var padding = 100;

	var containers = document.getElementsByClassName('container');
	var inner = document.getElementById('js-repo-pjax-container');
	
	if (!containers || !containers.length || !inner) {
		console.log(now + 'elements not found');
		return;
	}
	
	var bodyWidth = document.body.clientWidth;
	for (var c=0; c<containers.length; c++) {
		containers[c].style.width = (bodyWidth - padding) + 'px';
	}
	
	inner.style.width = (bodyWidth - padding - 50) + 'px';
}

setWideDiff();
