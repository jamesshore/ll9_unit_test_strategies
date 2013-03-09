// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global mocha, describe, it, expect, example, beforeEach */
(function() {
	"use strict";

	mocha.setup({ignoreLeaks: true});

	describe("Test Strategy #3 (Inject a test double)", function() {

		var paper;

		beforeEach(function() {
			paper = createTestPaper();
			example.injectDependency(paper);
		});

		it("checks if Raphaël would have been invoked correctly", function() {
			example.drawLine(20, 30, 90, 60);

			expect(paper.path.callParameters).to.eql([ ["M20,30L90,60"] ]);
		});

		function createTestPaper() {
			// This test double is a "spy": it records how it's called.
			// Spies are sometimes called "mocks," but real mocks also check that they are called correctly.

			var pathFn = function() {
				pathFn.callParameters.push(convertArgumentsToArray(arguments));
			};
			pathFn.callParameters = [];

			return {
				path: pathFn
			};
		}

		function convertArgumentsToArray(args) {
			return Array.prototype.slice.call(args, 0);
		}

	});
}());