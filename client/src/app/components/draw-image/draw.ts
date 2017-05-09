export class Draw {
    canvas;
		c;

		constructor(canvas){
			this.canvas = canvas.nativeElement;
			this.c = this.canvas.getContext("2d");
			this.c.fillStyle = "white";
			this.c.fillRect(0, 0, canvas.width, canvas.height);
		}
}
