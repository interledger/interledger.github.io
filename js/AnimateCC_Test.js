(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {};

// library properties:
lib.properties = {
	width: 360,
	height: 1040,
	fps: 24,
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



// stage content:
(lib.AnimateCC_Test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		sym.play(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(3));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7.7,1,1).p("AAUgiIgnBF");
	this.shape.setTransform(218,82.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(7.7,1,1).p("AgxBZIBjix");
	this.shape_1.setTransform(214.9,88);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(7.7,1,1).p("AhQCPIChkd");
	this.shape_2.setTransform(211.9,93.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(7.7,1,1).p("AhuDFIDdmJ");
	this.shape_3.setTransform(208.8,98.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(7.7,1,1).p("AiND7IEbn1");
	this.shape_4.setTransform(205.8,104.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(7.7,1,1).p("AirExIFXph");
	this.shape_5.setTransform(202.7,109.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(7.7,1,1).p("AjKFnIGVrN");
	this.shape_6.setTransform(199.7,114.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(7.7,1,1).p("AjoGdIHRs4");
	this.shape_7.setTransform(196.6,120.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(7.7,1,1).p("AkHHTIIPuk");
	this.shape_8.setTransform(193.6,125.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(7.7,1,1).p("AklIJIJLwR");
	this.shape_9.setTransform(190.5,131.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(7.7,1,1).p("AlEI+IKJx7");
	this.shape_10.setTransform(187.5,136.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(7.7,1,1).p("AliJ0ILFzn");
	this.shape_11.setTransform(184.4,141.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(7.7,1,1).p("AmBKqIMD1T");
	this.shape_12.setTransform(181.4,147.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(7.7,1,1).p("AmgLgINA2/");
	this.shape_13.setTransform(178.3,152.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(7.7,1,1).p("Am+MWIN94r");
	this.shape_14.setTransform(175.3,158.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(7.7,1,1).p("AncNMIO66X");
	this.shape_15.setTransform(172.2,163.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(7.7,1,1).p("An7OCIP38D");
	this.shape_16.setTransform(169.2,168.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(7.7,1,1).p("AoZO4IQ09v");
	this.shape_17.setTransform(166.1,174.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(7.7,1,1).p("Ao4PuIRx/b");
	this.shape_18.setTransform(163.1,179.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(7.7,1,1).p("AJYwjMgSvAhH");
	this.shape_19.setTransform(160,185);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(7.7,1,1).p("AJYxUMgSvAhGIA0Bj");
	this.shape_20.setTransform(160,190);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(7.7,1,1).p("AndNTIiAAxIS78H");
	this.shape_21.setTransform(160.6,201);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(7.7,1,1).p("AmXIfIjMDFITH3H");
	this.shape_22.setTransform(161.3,216.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(7.7,1,1).p("AlRDrIkZFaITVyJ");
	this.shape_23.setTransform(161.9,232.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(7.7,1,1).p("AkKhFIlmHqIThtJ");
	this.shape_24.setTransform(162.5,248.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(7.7,1,1).p("AjEk/ImyJ/ITtoK");
	this.shape_25.setTransform(163.2,259);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(7.7,1,1).p("Ah9mJIn/MTIT6jM");
	this.shape_26.setTransform(163.8,251.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(7.7,1,1).p("Ag3oMIpMOmIUHBz");
	this.shape_27.setTransform(164.4,249.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(7.7,1,1).p("AANr2IqWQ7IUTGy");
	this.shape_28.setTransform(165.1,258.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(7.7,1,1).p("ABTvgIriTPIUgLy");
	this.shape_29.setTransform(165.7,267.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(7.7,1,1).p("ACZzJIsvViIUtQx");
	this.shape_30.setTransform(166.3,275.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(7.7,1,1).p("ADf2zIt7X3IU5Vw");
	this.shape_31.setTransform(167,284.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(7.7,1,1).p("AEm6cIvJaMIVHat");
	this.shape_32.setTransform(167.6,292.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(7.7,1,1).p("AFs+GIwVcgIVTft");
	this.shape_33.setTransform(168.2,301.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(7.7,1,1).p("EAGyghwIxhe0MAVfAks");
	this.shape_34.setTransform(168.9,309.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(7.7,1,1).p("EAH5glZMgSvAhIMAVtApr");
	this.shape_35.setTransform(169.5,318.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(3));

	// Layer 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("EAH5hA+MgSvAhIMAVtAprMgN5A3K");
	this.shape_36.setTransform(169.5,495);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(279,595.2,141,836.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
