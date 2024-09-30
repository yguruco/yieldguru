include backend/.env
sail := backend/vendor/bin/sail

$(eval export $(shell sed -ne 's/ *#.*$$//; /./ s/=.*$$// p' backend/.env))

.PHONY: init
init:
	docker run --rm --interactive --tty --volume ./backend/:/var/www/html composer install --ignore-platform-reqs
	make up

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: install
install:
	@echo "Installing $(service) packages..."
ifeq ($(service), web)
	make clean-web
	docker-compose run web yarn install
else ifeq ($(service), web-admin)
	make clean-admin-web
	docker-compose run web-admin yarn install
else ifeq ($(service), api)
	rm -rf ./backend/vendor 2>/dev/null || true
	docker run --rm --interactive --tty --volume ./backend/:/var/www/html composer install --ignore-platform-reqs
else
	@echo "The service is set to something else or is not set correctly"
endif
	

# shell acess eg make sh service=web
.PHONY: sh
sh:
	@echo "Access $(service) shell ..."
ifeq ($(service), api)
	$(sail) shell
else
	docker-compose exec $(service) sh
endif

#  log ouputs eg make logs service=web
.PHONY: logs
logs:
ifeq ($(service), web)
	docker-compose logs --follow web
else ifeq ($(service), web-admin)
	docker-compose logs --follow web-admin
else ifeq ($(service), api)
	docker-compose logs --follow yg.api
else
	@echo "The service is set to something else or is not set correctly"
endif

.PHONY: clean-web
clean-web:
	rm -rf ./frontend/node_modules 2>/dev/null || true
	rm -rf ./frontend/yarn.lock 2>/dev/null || true
	docker-compose exec web yarn cache clean

.PHONY: clean-admin-web
clean-admin-web:
	rm -rf ./admin-frontend/node_modules 2>/dev/null || true
	rm -rf ./admin-frontend/yarn.lock 2>/dev/null || true
	docker-compose exec web-admin yarn cache clean

