// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global Raphael */

var example = {};

(function() {
	"use strict";

	var paper;

	example.initializeDrawingArea = function(div) {
		paper = new Raphael(div);
		return paper;
	};

	example.drawLine = function(fromX, fromY, toX, toY) {
		paper.path("M" + fromX + "," + fromY + "L" + toX + "," + toY);
	};

}());
