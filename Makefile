.PHONY: image-build
image-build:
	docker build -t yieldguru-frontend:latest ./frontend
	docker-compose down
	docker-compose up --build

# .PHONY: init
# init:
# 	docker run --rm --interactive --tty \
#           --volume ${PWD}/frontend:/app \
#           yarn install
# 	make up

.PHONY: up
up:
	docker-compose up -d

.PHONY: watch
watch:
	make up
	docker logs --tail 30 -ft yieldguru-frontend

.PHONY: down
down:
	docker-compose down

.PHONY: frontend-sh
frontend-sh:
	docker exec -it --workdir /app yieldguru-frontend sh

.PHONY: frontend-install
frontend-install:
	make frontend-clean
	docker exec --workdir /app yieldguru-frontend yarn install
 
.PHONY: frontend-clean
frontend-clean:
	rm -rf ./frontend/node_modules 2>/dev/null || true
	rm -rf ./frontend/yarn.lock 2>/dev/null || true
	docker exec --workdir /app yieldguru-frontend yarn cache clean




