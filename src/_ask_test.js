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

		it("simply asks Raphaël for the path", function() {
			example.drawLine(20, 30, 90, 60);

			var paths = [];
			paper.forEach(function(element) {
				paths.push(element);
			});

			expect(paths.length).to.equal(1);
		});

		var field;

//		beforeEach(function() {
//			field = document.createElement("input");
//			field.setAttribute("type", "text");
//		});
//
//		it("applies 'required' CSS class when field is empty", function() {
//			example.validateTextField(field);
//
//			expect(cssClass()).to.equal(example.REQUIRED_FIELD_CLASS);
//		});
//
//		it("removes 'required' CSS class when field is not empty", function() {
//			field.setAttribute("class", example.REQUIRED_FIELD_CLASS);
//			field.value = "not empty";
//
//			example.validateTextField(field);
//
//			expect(cssClass()).to.equal(null);
//		});
//
//		// TODO: should preserve existing CSS classes
//
//		function cssClass() {
//			return field.getAttribute("class");
//		}

	});
}());