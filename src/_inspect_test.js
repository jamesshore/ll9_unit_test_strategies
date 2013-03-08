// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global describe, it, expect, example, beforeEach */
(function() {
	"use strict";

	mocha.setup({ignoreLeaks: true});

	describe("Test Strategy #2 (Inspect the side effect)", function() {

		var paper;

		beforeEach(function() {
			var div = document.createElement("div");
			document.body.insertBefore(div, null);
			paper = example.initializeDrawingArea(div);
		});

		it("looks inside the DOM", function() {
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
			if (Raphael.svg) return svgPathToLine(element.node.attributes.d.value);
			else if (Raphael.vml) return vmlPathToLine(element.node.path.value);
			else throw new Error("Unknown Raphael engine");
		}

		function svgPathToLine(path) {
			var pathRegex;

			if (path.indexOf(",") !== -1) {
				// Firefox, Safari, and Chrome use format "M20,30L90,60"
				pathRegex = /M(\d+),(\d+)L(\d+),(\d+)/;
			}
			else {
				// IE 9 uses format "M 20 30 L 90 60"
				pathRegex = /M (\d+) (\d+) L (\d+) (\d+)/;
			}

			var coords = path.match(pathRegex);
			return [
				coords[1],
				coords[2],
				coords[3],
				coords[4]
			];
		}

		function vmlPathToLine(path) {
			// IE 8 uses format "m432000,648000 l1944000,1296000 e"
			var VML_MAGIC_NUMBER = 21600;
//			return "foo";
//			return path;

			var coords = path.match(/m(\d+),(\d+) l(\d+),(\d+) e/);
			return [
				coords[1] / VML_MAGIC_NUMBER,
				coords[2] / VML_MAGIC_NUMBER,
				coords[3] / VML_MAGIC_NUMBER,
				coords[4] / VML_MAGIC_NUMBER
			];
		}

	});
}());