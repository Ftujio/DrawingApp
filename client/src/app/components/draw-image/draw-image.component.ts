import { Component, OnInit, ViewChild, ElementRef,Renderer2 } from '@angular/core';
import { Draw } from './draw';

@Component({
  selector: 'app-draw-image',
  templateUrl: './draw-image.component.html',
  styleUrls: ['./draw-image.component.css', './icons.css', './main.css', './reset.css', './side-toolbar.css', './toolbar.css']
})
export class DrawImageComponent implements OnInit {
	@ViewChild('canvasObj') canvasObj:ElementRef;
	//draw: Draw;
	canvas;
	c;

  constructor() {
	}

  ngOnInit() {
		this.canvas = this.canvasObj.nativeElement;
		this.c = this.canvas.getContext("2d");
		this.c.fillStyle = "white";
		this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

}
