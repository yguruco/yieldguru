.PHONY: image-build
image-build:
	docker build -t yieldguru-frontend:latest ./frontend

# .PHONY: init
# init:
# 	docker run --rm --interactive --tty \
#           --volume ${PWD}/frontend:/app \
#           yarn install
# 	make up
		
.PHONY: frontend-install
frontend-install:
	make frontend-clean
	docker exec --workdir /app yieldguru-frontend yarn install

.PHONY: frontend-clean
frontend-clean:
	rm -rf ./frontend/node_modules 2>/dev/null || true
	rm ./frontend/package-lock.json 2>/dev/null || true
	docker exec --workdir /app yieldguru-frontend yarn cache clean


.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down
