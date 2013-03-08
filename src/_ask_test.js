// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global describe, it, expect, example, beforeEach */
(function() {
	"use strict";

	mocha.setup({ignoreLeaks: true});

	describe("Test Strategy #1 (Ask the dependency)", function() {

		var paper;

		beforeEach(function() {
			var div = document.createElement("div");
			paper = example.initializeDrawingArea(div);
		});

		it("Asks Raphaël what paths have been drawn", function() {
			example.drawLine(20, 30, 90, 60);

			expect(lines()).to.eql([ [20, 30, 90, 60] ]);
		});

		function lines() {
			var result = [];
			paper.forEach(function(element) {
				result.push(elementToLine(element));
			});
			return result;
		}

		function elementToLine(element) {
			// Raphaël gives us format "M20,30C20,30,90,60,90,60"
			var path = element.getSubpath().end;
			var coords = path.match(/M(\d+),(\d+)C\d+,\d+,(\d+),(\d+),\d+,\d+/);
			return [
				coords[1],
				coords[2],
				coords[3],
				coords[4]
			];
		}

	});
}());