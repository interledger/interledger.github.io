(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 350,
	height: 1000,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.icn_wallet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAFgEAEAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape.setTransform(7.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("ACHAeIAAAqQAAAHgEADQgEAFgGAAIg/AAQgGAAgFgFIgSgWQgIgJAIgJIASgVQAEgEAGAAIAsAAQAEAAAEgEQADgDAAgFIAAgiQAAgFgDgCQgEgEgEAAIjUAAQgKAAgGgGQgHgIAAgJQAAgKAHgGQAGgHAKAAICpAAQAFAAAEAEQADADAAAF");
	this.shape_1.setTransform(0,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("Ah7hrIAADKQAAAFAEAEQAEAEAFAAIDdAAQAFAAAEgEQAEgEAAgFIAAgx");
	this.shape_2.setTransform(-1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-12.9,29.2,25.9);


(lib.icn_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("Ai5AHIFzAAIAAAuQAAAGgEAFQgFAEgGAAIh/AAIAAAmQAAAGADAEIAVAXQAEADgCAFQgCAEgFAAIh1AAQgFAAgCgEQgDgFAEgDIAVgXQAEgEAAgGIAAgmIiHAAQgGAAgEgEQgFgFAAgGIAAguIAAiPQAAgGAFgEQAEgEAGAAIFVAAQAGAAAFAEQAEAEAAAGIAABp");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-16.1,39.3,32.3);


(lib.icn_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgEgFAAgFQAAgFAEgDQAEgFAFAAQAGAAAEAFQAEADAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(0,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.9,1).p("AhuAAIDdAA");
	this.shape_1.setTransform(0,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.9,1).p("AhuiSIAAgxQAAgJAHgGQAGgHAKAAICvAAQAKAAAGAHQAHAGAAAJIAAAxgABvhfIAAEjQAAAJgHAGQgGAHgKAAIivAAQgKAAgGgHQgHgGAAgJIAAlW");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-22.8,24.3,45.7);


(lib.icn_fed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AkeAAII9AA");
	this.shape.setTransform(0,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AAAhpIAADT");
	this.shape_1.setTransform(-10.1,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AAAgVIAAAq");
	this.shape_2.setTransform(-4.9,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AAAgVIAAAq");
	this.shape_3.setTransform(5,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AAAgUIAAAp");
	this.shape_4.setTransform(-4.9,-12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AAAgUIAAAp");
	this.shape_5.setTransform(0.1,-12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AAAgUIAAAp");
	this.shape_6.setTransform(5,-12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgUAAIApAA");
	this.shape_7.setTransform(17.9,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgUAAIApAA");
	this.shape_8.setTransform(17.9,5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgUAAIApAA");
	this.shape_9.setTransform(17.9,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgUAAIApAA");
	this.shape_10.setTransform(17.9,-4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgUAAIApAA");
	this.shape_11.setTransform(-17.4,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgUAAIApAA");
	this.shape_12.setTransform(-17.4,5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgUAAIApAA");
	this.shape_13.setTransform(-17.4,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AgUAAIApAA");
	this.shape_14.setTransform(-17.4,-4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AAkC9IAAhkIhLAAIAABkIjOAAIAAj/ICPAAIAAh6IDNAAIAAB6ICPAAIAAD/IiPAAIAAjQ");
	this.shape_15.setTransform(0.2,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-22.1,59.6,44.3);


(lib.icn_bank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.9,1).p("AilAAIFLAA");
	this.shape.setTransform(0,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.9,1).p("AAAhQIAACh");
	this.shape_1.setTransform(3.2,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.9,1).p("AAAhQIAACh");
	this.shape_2.setTransform(-11,4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.9,1,1).p("AglgSIh0AAQgFAAgBgEQgCgFAEgDICahwIChBwQAEACgCAFQgBAFgFAAIgyAAIAACaQAAAHgIAAIiFAAgAAzgSIhYAA");
	this.shape_3.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-17.3,35.3,34.6);


(lib.DigitalWallet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAAAqQgDgBgDgDIgDgIIAAgJIAAgjIgKAAIAAgJIAKgBIABgTIAIAAIAAATIASAAIAAAKIgSAAIAAAjQAAAHACADQADAEAFAAIAFgBIADgBIACAIIgFACIgHABQgGAAgCgCg");
	this.shape.setTransform(75.3,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgHAhQgGgDgFgEQgEgFgDgGQgCgHAAgIQAAgHACgHQADgGAEgFQAEgEAGgDQAFgCAEAAQAHAAAFACQAFADADADQAEAEACAGQABAHAAAHIAAAEIgsAAQABALAGAGQAGAHAIAAQAFAAAEgBIAIgFIAEAIIgKAFQgGACgHAAQgFAAgFgCgAASgDIgBgKQgBgEgCgCQgEgGgIAAQgCAAgDABIgGAFQgDADgCADQgCAEAAAGIAiAAIAAAAg");
	this.shape_1.setTransform(69.4,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AACAyIgDgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQgDgEAAgHIAAhUIAKAAIAABUIABAFIACABIABAAIABAAIACAIIgDABg");
	this.shape_2.setTransform(64.4,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AACAyIgDgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgDgEAAgHIAAhUIAKAAIAABUIABAFIACABIABAAIABAAIACAIIgDABg");
	this.shape_3.setTransform(60.9,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgNAiIgGgEQgGgFAAgJQAAgLAKgFIANgFIARgDIgBgGIgCgFQgCgDgCgBQgDgBgEgBQgEAAgFACIgKAFIgEgIIALgGQAFgBAJgBQAMAAAGAIIAEAIQABAFAAAHIAAAoIgJAAIgBgIIgBAAQgEAEgGADQgFACgFAAIgIgBgAAAAAIgHAEIgFAFIgCAGQAAAGAEADQADACAFAAQADAAAEgCQAFgCAFgFIAAgRIgPAAg");
	this.shape_4.setTransform(55.1,8.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AASAuIgOg2IgCgKIgCgLIAAAAIgBALIgCAKIgOA2IgOAAIgThaIAMAAIAKAvIACAQIADAPIABAAIADgPIADgQIANgvIAIAAIANAvIADAQIAEAPIAAAAIADgPIADgQIAJgvIALAAIgTBag");
	this.shape_5.setTransform(46.1,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AACAyIgDgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgDgEAAgHIAAhUIAKAAIAABUIABAFIACABIABAAIABAAIACAIIgDABg");
	this.shape_6.setTransform(36.4,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgNAiIgGgEQgGgFAAgJQAAgLAKgFIANgFIARgDIgBgGIgCgFQgCgDgCgBQgDgBgEgBQgEAAgFACIgKAFIgEgIIALgGQAFgBAJgBQAMAAAGAIIAEAIQABAFAAAHIAAAoIgJAAIgBgIIgBAAQgEAEgGADQgFACgFAAIgIgBgAAAAAIgHAEIgFAFIgCAGQAAAGAEADQADACAFAAQADAAAEgCQAFgCAFgFIAAgRIgPAAg");
	this.shape_7.setTransform(30.6,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAAAqQgDgBgCgDIgDgIIgCgJIAAgjIgKAAIAAgJIALgBIACgTIAHAAIAAATIATAAIAAAKIgTAAIAAAjQAAAHACADQACAEAHAAIADgBIAFgBIACAIIgHACIgGABQgFAAgDgCg");
	this.shape_8.setTransform(24.9,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgFAwIAAhCIAKAAIAABCgAgFgiQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACABADQgBADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_9.setTransform(20.8,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgNAwQgFAAgEgDIgGgGQgCgDAAgFQAAgEADgEQACgEAFgDIAAAAQgDgCgBgDQgCgCAAgFQAAgEACgBIAFgFIAAAAIgGgIQgCgFAAgGQAAgFACgFQACgEADgDQAEgEAEgCIAKgBIADAAIAFABIAXAAIAAAJIgOAAQADACACAEQABAEAAAEQAAAGgCAEQgCAFgDADIgIAEQgFACgDAAIgFgBIgFgCIgDAEIgBACQAAAEACACQADACAHAAIALAAQAMAAAGAEQADACABADQACADAAAFQAAAEgDAFQgCAEgFADQgEADgGACQgHACgGAAQgGAAgFgCgAgSAYIgCAGIABAFIAEADQAGAEAJAAQADAAAEgCIAHgCIAEgFIABgFQAAgFgDgCQgEgCgGAAIgKAAIgEAAIgFAAIgFAFgAgHgoIgFAEQgEAEAAAHIABAHIADAFIAFADIAFABIAEgBIAEgDIADgFQACgDAAgEQAAgHgFgEQgCgDgCgBIgEgBIgFABg");
	this.shape_10.setTransform(15.8,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgFAwIAAhCIAKAAIAABCgAgFgiQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACABADQgBADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_11.setTransform(10.4,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AggAuIAAhaIAXAAQAUAAALALQAFAGADAJQADAIAAAKQAAAKgDAJQgBAEgDAEIgEAHIgGAEIgIAFQgIADgIAAgAgUAkIAKAAQAPAAAIgJQAEgGACgHQACgGAAgIQAAgRgIgIQgIgKgPAAIgKAAg");
	this.shape_12.setTransform(4.6,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.2,81.7,21.6);


(lib.OnlinePaymentService = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgHAgQgGgCgFgEQgEgFgDgHQgCgGAAgIQAAgHACgHQADgGAEgEQAEgFAGgDQAFgCAEAAQAHAAAFACQAFACADAFQAEADACAHQABAFAAAHIAAAFIgsAAQABALAGAGQAGAHAIAAQAFAAAEgBIAIgFIAEAIIgKAFQgGACgHAAQgFAAgFgDgAASgEIgBgJQgBgEgCgDQgEgFgIAAQgCAAgDABIgGAEQgDADgCAEQgCAFAAAEIAiAAIAAAAg");
	this.shape.setTransform(94.3,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGAhQgGgCgEgFQgEgEgDgIQgCgGAAgIQAAgHACgHQADgGAFgFQADgEAHgDQAFgCAFAAQAHAAAEACQAGADADADIgFAIIgHgFQgDgCgFABQgEgBgCACQgEACgCAEQgEADgBAFQgCAEABAFQgBAGACAFIAEAIQADADAEACQACACAEAAQAFAAAEgDIAIgEIAFAIQgFAEgGACQgGACgGAAQgEAAgGgCg");
	this.shape_1.setTransform(87.8,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAwIAAhCIAKAAIAABCgAgFgiQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACABADQgBADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_2.setTransform(82.8,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgFAiIgZhCIAMAAIAOAkIACAKIACAKIABAAIADgKIACgKIAOgkIALAAIgZBCg");
	this.shape_3.setTransform(77.8,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgRAiIAAhCIAJAAIABANIABAAQADgHADgEQAFgDAGAAIAHABIgCAKIgDgBIgEAAQgEAAgFADQgCAEgEAJIAAApg");
	this.shape_4.setTransform(72.7,25.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgHAgQgGgCgFgEQgEgFgDgHQgCgGAAgIQAAgHACgHQADgGAEgEQAEgFAGgDQAFgCAEAAQAHAAAFACQAFACADAFQAEADACAHQABAFAAAHIAAAFIgsAAQABALAGAGQAGAHAIAAQAFAAAEgBIAIgFIAEAIIgKAFQgGACgHAAQgFAAgFgDgAASgEIgBgJQgBgEgCgDQgEgFgIAAQgCAAgDABIgGAEQgDADgCAEQgCAFAAAEIAiAAIAAAAg");
	this.shape_5.setTransform(66.3,25.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgQArQgIgDgGgHIAHgIQAFAGAGADQAHADAFAAQAJAAAFgEIAEgFQABgCAAgEQAAgEgBgCIgDgEIgFgEIgGgDIgLgFIgHgCIgGgEQgDgDgBgEQgCgEAAgEQAAgGACgEQACgFAEgDQAEgEAFgBQAGgCAEAAQAIAAAHADQAHADAFAFIgGAIQgEgEgGgCQgFgDgGAAQgGAAgEAEQgDABgBADQgBADAAADQAAADABACIAEAFIAFACIAEADIAMAFIAIADIAGAEQACADACAEQABAEAAAFQAAAGgCAEQgCAFgEAEQgEADgGACQgGACgHAAQgIAAgIgEg");
	this.shape_6.setTransform(59.1,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAAAqQgDgBgDgDIgCgIIgBgJIAAgjIgKAAIAAgJIAKgBIACgTIAHAAIAAATIATAAIAAAKIgTAAIAAAjQAAAHACADQADAEAFAAIAFgBIAEgBIABAIIgFACIgHABQgFAAgDgCg");
	this.shape_7.setTransform(50.3,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_8.setTransform(44.1,25.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgHAgQgGgCgFgEQgEgFgDgHQgCgGAAgIQAAgHACgHQADgGAEgEQAEgFAGgDQAFgCAEAAQAHAAAFACQAFACADAFQAEADACAHQABAFAAAHIAAAFIgsAAQABALAGAGQAGAHAIAAQAFAAAEgBIAIgFIAEAIIgKAFQgGACgHAAQgFAAgFgDgAASgEIgBgJQgBgEgCgDQgEgFgIAAQgCAAgDABIgGAEQgDADgCAEQgCAFAAAEIAiAAIAAAAg");
	this.shape_9.setTransform(36.8,25.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAjAiIAAgnIgBgJIgCgFQgDgEgGAAQgJAAgIAKIAAAvIgKAAIAAgnIgBgJQgBgDgCgCQgDgEgGAAQgIAAgJAKIAAAvIgLAAIAAhCIAJAAIABAKIAAAAIAKgIQAFgDAGAAQAJAAAEADQACADADAHQAFgGAFgEQAGgDAFAAQAGAAAEABQAEACADADQACAEABAFQABAFAAAGIAAApg");
	this.shape_10.setTransform(27.6,25.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgXAwIgDgBIACgKIACABIADABQADAAACgCIAFgDQADgEACgGIACgFIgbhCIAMAAIANAlIAEAKIABAIIAAAAIAEgIIADgKIALglIALAAIgZBHIgEAKQgBAEgCADIgHAFQgEACgFAAg");
	this.shape_11.setTransform(18.5,27.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgNAiIgGgEQgGgFAAgJQAAgMAKgEIANgFIARgCIgBgHIgCgGQgCgCgCgBQgDgCgEABQgEAAgFABIgKAGIgEgIIALgHQAFgCAJAAQAMAAAGAIIAEAJQABAFAAAGIAAAoIgJAAIgBgIIgBAAQgEADgGADQgFADgFAAIgIgBgAAAABIgHADIgFAFIgCAGQAAAGAEACQADADAFAAQADAAAEgDQAFgBAFgFIAAgRIgPABg");
	this.shape_12.setTransform(11.5,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgdAuIAAhbIAbAAQAHAAAGACQAGACAFACQAEAEACAFQACAFABAHQgBAIgCAGQgCAEgFACQgEADgGACQgGACgHAAIgQAAIAAAlgAgSAAIAQAAQAKAAAFgDQADgDABgDQACgDAAgGQAAgJgGgEIgHgDIgIgBIgQAAg");
	this.shape_13.setTransform(4.4,24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgHAhQgGgDgFgFQgEgEgDgGQgCgHAAgIQAAgHACgGQADgHAEgFQAEgFAGgCQAFgCAEAAQAHAAAFACQAFACADAEQAEAFACAFQABAGAAAIIAAAEIgsAAQABALAGAGQAGAHAIAAQAFAAAEgBIAIgEIAEAHIgKAFQgGACgHAAQgFAAgFgCgAASgDIgBgKQgBgEgCgCQgEgGgIAAQgCAAgDABIgGAFQgDADgCADQgCAEAAAGIAiAAIAAAAg");
	this.shape_14.setTransform(35,8.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_15.setTransform(27.7,8.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgEAwIAAhCIAJAAIAABCgAgEgiQgCgDAAgCQAAgEACgCQACgCACAAQADAAACACQADACAAAEQAAACgDADQgCACgDAAQgCAAgCgCg");
	this.shape_16.setTransform(22.2,6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AACAyIgDgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQgDgDAAgIIAAhUIAKAAIAABVIABAEIACAAIABAAIABAAIACAJIgDABg");
	this.shape_17.setTransform(19,6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_18.setTransform(13.1,8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgOAsQgIgDgFgHQgFgGgDgJQgDgJAAgKQAAgKADgIIAEgIIAEgIIAGgFIAHgEQAHgDAHAAIAIABQAEAAADADQAIADAFAFIAEAIIAEAIIACAJIABAJIgBAJIgCAKQgDAJgFAGQgFAHgIADQgHADgIAAQgHAAgHgDgAgKghQgFADgDAEQgEAFgBAHQgCAHAAAHQAAAIACAHQABAHAEAFQADAFAFADQAFACAFAAQAGAAAFgCQAEgDAEgFQAEgFABgHQADgHAAgIQAAgHgDgHQgBgHgEgFQgEgEgEgDQgFgDgGAAQgFAAgFADg");
	this.shape_19.setTransform(4.7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.1,101.9,39.2);


(lib.Cryptocurrency = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#263B3F").s().p("AgXAwIgDgBIACgKIACABIADABQADAAACgCIAFgDQADgEACgGIACgFIgchCIANAAIANAlIAEAKIABAIIAAAAIADgIIAEgKIALglIALAAIgZBHIgEAKQgBAEgDADIgGAFQgEACgFAAg");
	this.shape.setTransform(87.1,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#263B3F").s().p("AgGAhQgGgDgFgEQgEgFgCgGQgDgHAAgIQAAgHADgHQADgGAEgFQAFgFAGgCQAFgCAFAAQAHAAAEACQAFACAEAEIgFAIIgHgFQgEgBgEgBQgEABgCABQgEACgDADQgDAEgBAFQgBAFAAAEQAAAGABAEIAEAIQADAEAEACQACABAEABQAFgBAEgBIAIgFIAEAHQgEAEgGADQgGACgFAAQgGAAgFgCg");
	this.shape_1.setTransform(80.9,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#263B3F").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_2.setTransform(73.7,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#263B3F").s().p("AgHAhQgGgDgFgEQgEgFgDgGQgCgHAAgIQAAgHACgHQADgGAEgFQAEgEAGgDQAFgCAEAAQAHAAAFACQAFADADADQAEAEACAGQABAHAAAHIAAAEIgsAAQABALAGAGQAGAHAIAAQAFAAAEgBIAIgFIAEAIIgKAFQgGACgHAAQgFAAgFgCgAASgDIgBgKQgBgEgCgCQgEgGgIAAQgCAAgDABIgGAFQgDADgCADQgCAEAAAGIAiAAIAAAAg");
	this.shape_3.setTransform(66.5,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#263B3F").s().p("AgRAiIAAhCIAJAAIABANIABAAQADgHADgEQAFgDAGAAIAHABIgCAKIgDgBIgEAAQgEAAgFADQgCAEgEAJIAAApg");
	this.shape_4.setTransform(61.1,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#263B3F").s().p("AgRAiIAAhCIAJAAIABANIABAAQADgHADgEQAFgDAGAAIAHABIgCAKIgDgBIgEAAQgEAAgFADQgCAEgEAJIAAApg");
	this.shape_5.setTransform(56.3,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#263B3F").s().p("AgOAhQgEgCgDgDQgEgHAAgNIAAgpIALAAIAAAnIABAJIACAFIAEADIAGABQADAAAEgCQAEgDAFgGIAAguIAMAAIAABCIgKAAIgBgLIAAAAQgFAGgFADQgFADgGAAQgFAAgEgBg");
	this.shape_6.setTransform(49.4,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#263B3F").s().p("AgGAhQgGgDgEgEQgEgFgDgGQgDgHABgIQgBgHADgHQADgGAFgFQAEgFAFgCQAGgCAFAAQAHAAAFACQAEACAEAEIgGAIIgGgFQgDgBgEgBQgFABgCABQgEACgCADQgDAEgCAFQgBAFgBAEQABAGABAEIAEAIQADAEAEACQABABAGABQAEgBAFgBIAGgFIAGAHQgFAEgGADQgFACgHAAQgEAAgGgCg");
	this.shape_7.setTransform(42.7,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#263B3F").s().p("AgKAhQgGgDgEgEQgFgFgCgGQgDgHAAgIQAAgHADgHQACgGAFgFQAEgFAGgCQAFgCAFAAQAFAAAGACQAGACAEAFQAFAFACAGQADAHAAAHQAAAIgDAHQgCAGgFAFQgEAEgGADQgGACgFAAQgFAAgFgCgAgHgXIgGAFQgCAEgBAFQgCAFAAAEQAAAGACAEQABAFACADIAGAGQAEABADABIAIgCQADgCADgEQADgDAAgFQACgEAAgGQAAgEgCgFQAAgFgDgEQgDgDgDgCIgIgCQgDABgEABg");
	this.shape_8.setTransform(35.6,8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#263B3F").s().p("AAAAqQgDgBgDgDIgCgIIgBgJIAAgjIgLAAIAAgJIALgBIACgTIAHAAIAAATIATAAIAAAKIgTAAIAAAjQAAAHACADQADAEAGAAIADgBIAFgBIABAIIgGACIgGABQgFAAgDgCg");
	this.shape_9.setTransform(29.5,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#263B3F").s().p("AgcAxIAAhfIAJAAIABAIIABAAIAKgHQAFgCAEAAQAHAAAFACQAFACADAFQAEAEABAHQACAGAAAIQAAAJgCAEQgDAIgEAEQgEAFgFACQgFADgGAAQgDgBgFgCIgJgFIAAALIAAAYgAgHgkQgFADgFAEIAAAiQAFAEAEABIAIACQACAAAEgCIAGgFQACgEACgCQABgGAAgGIgBgLIgDgHQgCgDgDgCQgEgCgEAAQgDAAgEACg");
	this.shape_10.setTransform(23.4,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#263B3F").s().p("AgWAwIgFgBIADgKIADABIACABQADAAADgCIADgDQAEgEADgGIABgFIgbhCIALAAIAPAlIADAKIABAIIABAAIADgIIACgKIANglIALAAIgaBHIgEAKQgBAEgCADIgIAFQgDACgGAAg");
	this.shape_11.setTransform(16.1,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#263B3F").s().p("AgRAiIAAhCIAJAAIABANIABAAQADgHADgEQAFgDAGAAIAHABIgCAKIgDgBIgEAAQgEAAgFADQgCAEgEAJIAAApg");
	this.shape_12.setTransform(11,8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#263B3F").s().p("AgBAuIgHgCIgHgEIgGgFIgFgHIgDgIIgDgKIgBgKIABgJIADgJIADgIIAFgHQAGgHAHgCQAEgCAEgBIAGgBQAJAAAGAEQAGADAEAFIgGAHIgIgGQgFgDgFAAQgHAAgDADQgGADgDAEQgEAFgCAHQgCAGAAAIQAAAIACAHQACAHADAFQAEAEAFAEQAEACAGAAQAHAAAFgCIAJgIIAHAHQgIAIgFACIgHACIgIABIgHgBg");
	this.shape_13.setTransform(4.1,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.2,94.6,21.6);


(lib.InternationalBank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#263B3F").s().p("AAPAxIgSggIgMAOIAAASIgMAAIAAhhIAMAAIAABBIAbgiIANAAIgXAaIAaAog");
	this.shape.setTransform(106.3,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#263B3F").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_1.setTransform(98.6,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#263B3F").s().p("AgNAiIgGgEQgGgFAAgJQAAgLAKgFIANgFIARgDIgBgGIgCgFQgCgDgCgBQgDgBgEgBQgEAAgFACIgKAFIgEgIIALgGQAFgBAJgBQAMAAAGAIIAEAIQABAFAAAHIAAAoIgJAAIgBgIIgBAAQgEAEgGADQgFACgFAAIgIgBgAAAAAIgHAEIgFAFIgCAGQAAAGAEADQADACAFAAQADAAAEgCQAFgCAFgFIAAgRIgPAAg");
	this.shape_2.setTransform(91,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#263B3F").s().p("AgeAuIAAhaIAbAAQAFAAAFABQAGABAEADQAFACACAFQADAEgBAGIAAAHIgDAGIgGAEIgHADIAAAAIAJACIAHADQADADACAEIABAJQAAAGgDAFQgDAFgEAEQgFADgGACQgHABgFABgAgTAlIAQAAQAKgBAHgEQAGgEAAgKQAAgEgCgEQgBgCgDgDQgGgEgLAAIgQAAgAgTgFIAOAAIAIgBIAHgDQAFgFAAgHQAAgEgBgCIgFgFIgGgCIgIgBIgOAAg");
	this.shape_3.setTransform(83.8,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#263B3F").s().p("AACAyIgDgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgDgEAAgHIAAhUIAKAAIAABUIABAFIACABIABAAIABAAIACAIIgDABg");
	this.shape_4.setTransform(75.1,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#263B3F").s().p("AgNAiIgGgEQgGgFAAgJQAAgLAKgFIANgFIARgDIgBgGIgCgFQgCgDgCgBQgDgBgEgBQgEAAgFACIgKAFIgEgIIALgGQAFgBAJgBQAMAAAGAIIAEAIQABAFAAAHIAAAoIgJAAIgBgIIgBAAQgEAEgGADQgFACgFAAIgIgBgAAAAAIgHAEIgFAFIgCAGQAAAGAEADQADACAFAAQADAAAEgCQAFgCAFgFIAAgRIgPAAg");
	this.shape_5.setTransform(69.3,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#263B3F").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_6.setTransform(62.1,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#263B3F").s().p("AgKAhQgGgDgEgEQgFgFgCgGQgDgHAAgIQAAgHADgHQACgGAFgFQAEgFAGgCQAFgCAFAAQAFAAAGACQAGACAEAFQAFAFACAGQADAHAAAHQAAAIgDAHQgCAGgFAFQgEAEgGADQgGACgFAAQgFAAgFgCgAgHgXIgGAFQgCAEgCAFQgBAFAAAEQAAAGABAEQACAFACADIAGAGQAEABADABIAIgCQADgCADgEQADgDAAgFQACgEAAgGQAAgEgCgFQAAgFgDgEQgDgDgDgCIgIgCQgDABgEABg");
	this.shape_7.setTransform(54.5,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#263B3F").s().p("AgEAwIAAhCIAJAAIAABCgAgEgiQgCgDAAgDQAAgDACgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_8.setTransform(49,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#263B3F").s().p("AAAAqQgDgBgDgDIgCgIIgBgJIAAgjIgKAAIAAgJIAKgBIABgTIAIAAIAAATIASAAIAAAKIgSAAIAAAjQAAAHACADQACAEAGAAIAFgBIADgBIACAIIgFACIgHABQgGAAgCgCg");
	this.shape_9.setTransform(45,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#263B3F").s().p("AgNAiIgGgEQgGgFAAgJQAAgLAKgFIANgFIARgDIgBgGIgCgFQgCgDgCgBQgDgBgEgBQgEAAgFACIgKAFIgEgIIALgGQAFgBAJgBQAMAAAGAIIAEAIQABAFAAAHIAAAoIgJAAIgBgIIgBAAQgEAEgGADQgFACgFAAIgIgBgAAAAAIgHAEIgFAFIgCAGQAAAGAEADQADACAFAAQADAAAEgCQAFgCAFgFIAAgRIgPAAg");
	this.shape_10.setTransform(38.9,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#263B3F").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_11.setTransform(31.6,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#263B3F").s().p("AgRAiIAAhCIAJAAIABANIABAAQADgHADgEQAFgDAGAAIAHABIgCAKIgDgBIgEAAQgEAAgFADQgCAEgEAJIAAApg");
	this.shape_12.setTransform(25.9,8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#263B3F").s().p("AgHAhQgGgDgFgEQgEgFgDgGQgCgHAAgIQAAgHACgHQADgGAEgFQAEgEAGgDQAFgCAEAAQAHAAAFACQAFADADADQAEAEACAGQABAHAAAHIAAAEIgsAAQABALAGAGQAGAHAIAAQAFAAAEgBIAIgFIAEAIIgKAFQgGACgHAAQgFAAgFgCgAASgDIgBgKQgBgEgCgCQgEgGgIAAQgCAAgDABIgGAFQgDADgCADQgCAEAAAGIAiAAIAAAAg");
	this.shape_13.setTransform(19.5,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#263B3F").s().p("AAAAqQgDgBgCgDIgDgIIgBgJIAAgjIgLAAIAAgJIALgBIACgTIAHAAIAAATIATAAIAAAKIgTAAIAAAjQAAAHACADQADAEAFAAIAEgBIAFgBIABAIIgGACIgGABQgFAAgDgCg");
	this.shape_14.setTransform(13.8,7.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#263B3F").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_15.setTransform(7.5,8.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#263B3F").s().p("AgEAuIAAhaIAJAAIAABag");
	this.shape_16.setTransform(1.8,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.2,113.5,21.6);


(lib.LocalBank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#263B3F").s().p("AAPAxIgSggIgMAOIAAASIgMAAIAAhhIAMAAIAABBIAbgiIANAAIgXAaIAaAog");
	this.shape.setTransform(61.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#263B3F").s().p("AAPAiIAAgnIgBgJIgCgFQgDgEgHAAQgDAAgEACIgJAIIAAAvIgMAAIAAhCIAKAAIABAKIAAAAIAKgIIAFgDIAGAAQALAAAFAGQACAEABAFQACAFAAAGIAAApg");
	this.shape_1.setTransform(53.4,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#263B3F").s().p("AgNAiIgGgEQgGgFAAgJQAAgMAKgEIANgEIARgDIgBgHIgCgGQgCgCgCgBQgDgCgEABQgEAAgFABIgKAGIgEgIIALgHQAFgCAJAAQAMAAAGAIIAEAJQABAFAAAGIAAAnIgJAAIgBgHIgBAAQgEADgGADQgFADgFAAIgIgBgAAAABIgHADIgFAFIgCAGQAAAGAEACQADADAFAAQADAAAEgDQAFgCAFgEIAAgRIgPABg");
	this.shape_2.setTransform(45.9,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#263B3F").s().p("AgeAtIAAhaIAbAAQAFABAFABQAHABADADQAFADACAEQACAEAAAGIgBAGIgCAGIgGAFIgGADIAAAAIAJACIAGAEQADADACADIAAAIQAAAHgCAGQgCAEgFAEQgEADgHACQgHABgFAAgAgTAkIAQAAQAKABAGgFQAHgEAAgKQAAgEgBgDQgCgEgDgBQgHgEgKAAIgQAAgAgTgFIAOAAIAIgBIAHgDQAFgFAAgHQAAgEgCgDIgDgEIgHgDIgHAAIgPAAg");
	this.shape_3.setTransform(38.7,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#263B3F").s().p("AACAyIgDgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQgDgEAAgHIAAhUIAKAAIAABUIABAEIACACIABAAIABAAIACAIIgDABg");
	this.shape_4.setTransform(29.9,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#263B3F").s().p("AgNAiIgGgEQgGgFAAgJQAAgMAKgEIANgEIARgDIgBgHIgCgGQgCgCgCgBQgDgCgEABQgEAAgFABIgKAGIgEgIIALgHQAFgCAJAAQAMAAAGAIIAEAJQABAFAAAGIAAAnIgJAAIgBgHIgBAAQgEADgGADQgFADgFAAIgIgBgAAAABIgHADIgFAFIgCAGQAAAGAEACQADADAFAAQADAAAEgDQAFgCAFgEIAAgRIgPABg");
	this.shape_5.setTransform(24.2,8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#263B3F").s().p("AgGAhQgGgDgEgEQgEgEgDgIQgCgGAAgIQAAgHACgHQADgGAFgFQADgEAHgDQAFgCAFAAQAHAAAFACQAFADADADIgFAHIgHgEQgEgCgEABQgEgBgCACQgEACgCAEQgEADgBAFQgBAEgBAFQABAGABAFIAEAIQADADAEACQABACAFAAQAFgBAEgCIAHgEIAGAIQgFAEgGACQgFACgHAAQgEAAgGgCg");
	this.shape_6.setTransform(17.7,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#263B3F").s().p("AgLAhQgFgDgFgEQgEgEgCgIQgDgGAAgIQAAgHADgHQACgGAEgFQAFgEAFgDQAGgCAFAAQAGAAAFACQAGADAEAEQAFAFADAGQACAHAAAHQAAAIgCAGQgDAIgFAEQgEAEgGADQgFACgGAAQgFAAgGgCgAgGgXIgHAGQgDADAAAFQgCAEAAAFQAAAGACAFQAAAEADAEIAHAFQADACADAAIAIgCQADgCACgDQAEgEABgEQABgFAAgGQAAgFgBgEQgBgFgEgDQgCgEgDgCIgIgBQgDgBgDACg");
	this.shape_7.setTransform(10.6,8.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#263B3F").s().p("AgYAtIAAhaIALAAIAABQIAnAAIAAAKg");
	this.shape_8.setTransform(3.9,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.1,68.3,21.6);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#41D9BC").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAHAGgBAHQABAIgHAGQgFAFgIAAQgHAAgGgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1.9,4,4);


(lib.Circle5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C75A5B").s().p("AkEEFQhshsgBiZQABiXBshtQBshsCYgBQCYABBtBsQBtBtgBCXQABCZhtBsQhtBtiYgBQiYABhshtg");
	this.shape.setTransform(37,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


(lib.Circle4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B961").s().p("Ai5C6QhOhNAAhtQAAhsBOhNQBNhOBsAAQBsAABOBOQBNBNABBsQgBBthNBNQhOBOhsAAQhsAAhNhOg");
	this.shape.setTransform(26.4,26.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.8,52.8);


(lib.Circle3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#274C45").s().p("AkrErQh8h7AAiwQAAiuB8h9QB8h8CvAAQCvAAB9B8QB8B9AACuQAACwh8B7Qh9B9ivAAQivAAh8h9g");
	this.shape.setTransform(42.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,84.9);


(lib.Circle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54984C").s().p("Aj6D7QhohoAAiTQAAiRBohpQBohoCSAAQCTAABoBoQBoBpAACRQAACThoBoQhoBoiTAAQiSAAhohog");
	this.shape.setTransform(35.5,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.1,71.1);


(lib.Circle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E6F86").s().p("AkEEFQhshtgBiYQABiYBshsQBshsCYgBQCYABBtBsQBtBsgBCYQABCYhtBtQhtBtiYgBQiYABhshtg");
	this.shape.setTransform(37,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


(lib.Hop5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.OnlinePaymentService();
	this.instance.setTransform(40.2,0.6,1,1,0,0,0,49,15.5);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.icn_screen("synched",0);
	this.instance_1.setTransform(-54,3);

	this.instance_2 = new lib.Circle5();
	this.instance_2.setTransform(-54,0,1,1,0,0,0,37,37);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-37,182.1,74);


(lib.Hop4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cryptocurrency();
	this.instance.setTransform(28.6,-1.1,1,1,0,0,0,45.2,6.6);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.icn_wallet("synched",0);
	this.instance_1.setTransform(-48,0);

	this.instance_2 = new lib.Circle4();
	this.instance_2.setTransform(-49.5,0,1,1,0,0,0,26.4,26.4);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-26.4,151.9,52.8);


(lib.Hop3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.InternationalBank();
	this.instance.setTransform(47.9,-1,1,1,0,0,0,54.7,6.6);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.icn_fed("synched",0);
	this.instance_1.setTransform(-62.1,0);

	this.instance_2 = new lib.Circle3();
	this.instance_2.setTransform(-62.1,0.1,1,1,0,0,0,42.5,42.5);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-42.4,209.2,84.9);


(lib.Hop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LocalBank();
	this.instance.setTransform(39.5,0.6,1,1,0,0,0,32.1,6.7);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.icn_bank("synched",0);
	this.instance_1.setTransform(-38.1,0);

	this.instance_2 = new lib.Circle2();
	this.instance_2.setTransform(-38.1,0.1,1,1,0,0,0,35.5,35.6);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.6,-35.5,147.4,71.1);


(lib.Hop1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DigitalWallet();
	this.instance.setTransform(40.2,0.9,1,1,0,0,0,38.9,6.6);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.icn_phone("synched",0);
	this.instance_1.setTransform(-43.9,0);

	this.instance_2 = new lib.Circle1();
	this.instance_2.setTransform(-43.9,0,1,1,0,0,0,37,37);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-37,161.9,74);


// stage content:
(lib.sidebar_animation_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Path1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#36DABC").ss(1,1,1).p("AAajpIgzHT");
	this.shape.setTransform(169.2,71.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#36DABC").ss(1,1,1).p("AAsl/IhXL/");
	this.shape_1.setTransform(167.5,86.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#36DABC").ss(1,1,1).p("ABXr2IisXt");
	this.shape_2.setTransform(163.2,124);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#36DABC").ss(1,1,1).p("ABwvXIjfev");
	this.shape_3.setTransform(160.6,146.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#36DABC").ss(1,1,1).p("ACY0wMgEvAph");
	this.shape_4.setTransform(156.7,181);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#36DABC").ss(1,1,1).p("ACZ07MgExAp3");
	this.shape_5.setTransform(150.8,232);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#36DABC").ss(1,1,1).p("ADW1UMgD5AiNIiyIc");
	this.shape_6.setTransform(137.9,294.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#36DABC").ss(1,1,1).p("AEn18IizYXImaTi");
	this.shape_7.setTransform(122.5,361.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#36DABC").ss(1,1,1).p("AEgxZIg5HqIoGYlIAkCk");
	this.shape_8.setTransform(111,439.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#36DABC").ss(1,1,1).p("ADPvrImdTlICjLy");
	this.shape_9.setTransform(102.9,509.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#36DABC").ss(1,1,1).p("ABSxBIjuLWIE5Wt");
	this.shape_10.setTransform(97.9,571);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#36DABC").ss(1,1,1).p("AjFxGIgdBWMAHFAg3");
	this.shape_11.setTransform(105,635.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#36DABC").ss(1,1,1).p("AjOu/IGdd/");
	this.shape_12.setTransform(116.3,692);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#36DABC").ss(1,1,1).p("AjRvOIGjed");
	this.shape_13.setTransform(131.5,762.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#36DABC").ss(1,1,1).p("AisskIFZZJ");
	this.shape_14.setTransform(146.4,831.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#36DABC").ss(1,1,1).p("AiFprIEKTX");
	this.shape_15.setTransform(158.8,889);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#36DABC").ss(1,1,1).p("AhAkwICBJh");
	this.shape_16.setTransform(165.6,920.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(27));

	// Dot5
	this.instance = new lib.dot();
	this.instance.setTransform(172.2,951);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({_off:true},3).wait(26));

	// Dot3
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(82.2,534.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},4).wait(32));

	// Dot2
	this.instance_2 = new lib.dot();
	this.instance_2.setTransform(134.2,377);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({_off:true},3).wait(35));

	// Dot 1
	this.instance_3 = new lib.dot();
	this.instance_3.setTransform(171.9,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},6).wait(39));

	// Hop5
	this.instance_4 = new lib.Hop5();
	this.instance_4.setTransform(226,952);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// Hop4
	this.instance_5 = new lib.Hop4();
	this.instance_5.setTransform(258.6,619.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// Hop3
	this.instance_6 = new lib.Hop3();
	this.instance_6.setTransform(144.2,533);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

	// Hop2
	this.instance_7 = new lib.Hop2();
	this.instance_7.setTransform(172.5,375.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45));

	// Hop1
	this.instance_8 = new lib.Hop1();
	this.instance_8.setTransform(215.9,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45));

	// Background Lines
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#4F6164").ss(1,0,1).p("EALchGmI23AAEALcBGnI23AA");
	this.shape_17.setTransform(61.8,500);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(54,218,188,0.298)").ss(1,1,1).p("AJ3S5MgFuhZaMgF4AzZAp3FdITuNcMgLmgmBIoIYlMAOCBBFMAFsgzp");
	this.shape_18.setTransform(145.4,499.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.5,435,347,1121);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;