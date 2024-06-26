ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
UNAME := $(shell uname)

.PHONY:all
all: webview_cgo_exports.h build-ui build self-test

webview_cgo_exports.h:
	go tool cgo -exportheader webview_cgo_exports.h webview.go

.PHONY: setup-build-env
setup-build-env:
	$(ROOT_DIR)/scripts/$(UNAME)/install
	$(MAKE) -C ./cmd/exampleapp/protonappui setup-build-env
	

.PHONY: install-build-deps
install-build-deps:
	$(MAKE) -C ./cmd/exampleapp/protonappui install-build-deps

.PHONY: build-ui
build-ui:
	$(MAKE) -C ./cmd/exampleapp/protonappui build

.PHONY: build 
build:
	cd $(ROOT_DIR)/cmd/exampleapp/ && go build -v

.PHONY: build
self-test: 
	$(ROOT_DIR)/cmd/exampleapp/exampleapp --self-test