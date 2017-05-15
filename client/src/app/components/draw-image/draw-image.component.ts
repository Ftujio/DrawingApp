import { Component, OnInit, ViewChild, ElementRef,Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-draw-image',
  templateUrl: './draw-image.component.html',
  styleUrls: ['./draw-image.component.css', './icons.css', './main.css', './reset.css', './side-toolbar.css', './toolbar.css']
})
export class DrawImageComponent implements OnInit, AfterViewInit {
  constructor(private myElement: ElementRef) {

	}

	ngAfterViewInit(){
		this.loadScript("setup.js");
		this.loadScript("toolbar.js");
		this.loadScript("brush.js");
		this.loadScript("line.js");
		this.loadScript("circle.js");
		this.loadScript("rectangle.js");
		this.loadScript("eraser.js");
		this.loadScript("bin.js");
		this.loadScript("save.js");
		this.loadScript("side-toolbar.js");
	}

	loadScript(name: string){
		let s = document.createElement("script");
  	s.type = "text/javascript";
  	s.src = "http://localhost:3001/js/" + name;
  	this.myElement.nativeElement.appendChild(s);
	}

  ngOnInit() {

	}

}
