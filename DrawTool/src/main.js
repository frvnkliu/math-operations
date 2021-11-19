var zip = new JSZip();
//Last Pathloolook3yu s
var photoZip = zip.folder("math-operation-images");
var press = false;
var type = -1;
var ctx, canvas, x, y, preview, img, images, photoCount;
function init() {
	var coordinate = document.getElementById("coord");
	var oldcoordinate = document.getElementById("oldcoord");
	var label = document.getElementById("label");
	preview = document.getElementById("images");
	canvas = document.getElementById("mathSymbol");
	ctx = canvas.getContext("2d");
	ctx.strokeStyle = "white";
	ctx.lineWidth= 2;
	ctx.lineCap = "round";
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	photoCount = 0;
	photoZip.folder("plus");
	photoZip.folder("minus");
	photoZip.folder("multiply");
	photoZip.folder("divide");
	photoZip.folder("slash");

	canvas.addEventListener("mousedown", function(event){
		press = true;
		ctx.beginPath();
	}, false);

	canvas.addEventListener("mousemove", function(event){
			var pos = getPos(event);
			ctx.beginPath();
			ctx.moveTo(x, y); 
			x = pos.x;
			y = pos.y
			if(press){
				ctx.lineTo(x,y);
				ctx.stroke();
			}
	}, false);

	canvas.addEventListener("mouseup", function(event){
		press = false;
	}, false);

	canvas.addEventListener("mouseout", function(event){
		press = false;
	}, false);

	document.addEventListener("keydown", function(event){
		switch(event.key){
			case "s":
				save();
				break;
			case "c":
				erase();
				break;
			default:
		}
	},false);
}
//
function erase(){
	//if(confirm("Clear Drawing?")){
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	//}
		ctx.closePath();
		press = false;
	console.log("buttonPressed");
}

function save(){
	//Implement saving
	img = canvas.toDataURL();
	
	if(type==-1){
		alert("Please Select an Operation First");
	}else{
		photoZip.folder(type).file(type+photoCount,img);
		erase();
	}
}

function download(){
	var link = document.createElement('a');
  	link.download = type + 'operation';
  	link.href = photoZip.toDataURL();
  	link.click();
}

function remove(){

}
function switchOp(button){
	switch(button.id){
		case "plus":
			type = 0;
			label.innerHTML = "plus (+)";
			break;
		case "minus":
			type = 1;
			label.innerHTML = "minus (-)";
			break;
		case "multiply":
			type = 2;
			label.innerHTML = "multiply (×)";
			break;
		case "divide":
			type = 3;
			label.innerHTML = "divide (÷)";
			break;
		case "slash":
			type = 4;
			label.innerHTML = "slash (/)";
			break;
	}
	erase();

}
function getPos(event){
	var x = event.layerX/10;
	var y = event.layerY/10;
	//var x = event.layerX;
	//var y = event.layerY;
	return{
		x: x,
		y: y
	};
}
