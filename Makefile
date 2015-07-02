#!/bin/bash

# Variables
STANDARD = node_modules/.bin/standard
ECHINT = node_modules/.bin/echint
MOCHA = node_modules/.bin/mocha
MOCHA_SPAWN = node_modules/.bin/_mocha
ISTANBUL = node_modules/.bin/istanbul
COVERAGE_REPORT = ./coverage/lcov.info
CODECLIMATE = ./node_modules/.bin/codeclimate-test-reporter
TESTS = test/**/*

# Commands
clean:
	rm -rf coverage dist

test:
	$(STANDARD) && $(ECHINT) && $(MOCHA) -R spec $(TESTS)

coverage:
	$(ISTANBUL) cover $(MOCHA_SPAWN) -- -R spec $(TESTS)

codeclimate:
	cat $(COVERAGE_REPORT) | $(CODECLIMATE)

# Exports
.PHONY: test clean coverage codeclimate
