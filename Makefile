ZBAR_VERSION = 0.23.90
ZBAR_SRC = zbar-$(ZBAR_VERSION)

SRC = src
BUILD = build
DIST = dist

EM_VERSION = 3.1.44

# See https://emscripten.org/docs/tools_reference/emcc.html
EMCC = emcc
EMMAKE = emmake
EMCONFIG = emconfigure

ZBAR_DEPS = $(ZBAR_SRC)/make.done
ZBAR_OBJS = $(ZBAR_SRC)/zbar/*.o $(ZBAR_SRC)/zbar/*/*.o
ZBAR_INC = -I $(ZBAR_SRC)/include/ -I $(ZBAR_SRC)/

# See https://github.com/emscripten-core/emscripten/blob/main/src/settings.js
EMCC_FLAGS = -Oz -Wall -Werror -s ALLOW_MEMORY_GROWTH=1 \
	-s EXPORTED_FUNCTIONS="['_malloc','_free']" \
	-s MODULARIZE=1 -s EXPORT_NAME=zbarWasm

.PHONY: all build clean-build clean

all: build

build: $(BUILD)/zbar.js $(BUILD)/zbar.wasm

clean-build:
	-rm -rf $(DIST) $(BUILD)

clean: clean-build
	-rm $(ZBAR_SRC).tar.gz
	-rm -rf $(ZBAR_SRC)

$(BUILD)/zbar.wasm $(BUILD)/zbar.js: $(ZBAR_DEPS) $(SRC)/export.c
	mkdir -p $(BUILD)/
	$(EMCC) $(EMCC_FLAGS) -o $(BUILD)/zbar.js -sEXPORT_ES6 $(SRC)/export.c $(ZBAR_INC) $(ZBAR_OBJS)

$(ZBAR_DEPS): $(ZBAR_SRC)/Makefile
	cd $(ZBAR_SRC) && $(EMMAKE) make CFLAGS=-Os CXXFLAGS=-Os \
		DEFS="-DZNO_MESSAGES -DHAVE_CONFIG_H"
	touch -m $(ZBAR_DEPS)

$(ZBAR_SRC)/Makefile: $(ZBAR_SRC)/configure
	cd $(ZBAR_SRC) && $(EMCONFIG) ./configure --without-x --without-xshm \
		--without-xv --without-jpeg --without-libiconv-prefix \
		--without-imagemagick --without-npapi --without-gtk \
		--without-python --without-qt --without-xshm --disable-video \
		--disable-pthread --disable-assert

$(ZBAR_SRC)/configure: $(ZBAR_SRC).tar.gz
	tar zxvf $(ZBAR_SRC).tar.gz
	touch -m $(ZBAR_SRC)/configure

$(ZBAR_SRC).tar.gz:
	curl -L -o $(ZBAR_SRC).tar.gz https://linuxtv.org/downloads/zbar/zbar-$(ZBAR_VERSION).tar.gz
