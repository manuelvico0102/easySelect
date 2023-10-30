# Variables
DIR = src

check: 
	deno check --all $(DIR)/oferta.ts $(DIR)/gestorCandidato.ts

all: check