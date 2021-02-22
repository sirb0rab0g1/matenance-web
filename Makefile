dev:
	@echo "\033[92mStarting an environment for local development...\033[0m"
	npm run dev

clean:
	rm -rf dist

lan:
	python lan.py

deploy:
	git push heroku dev:master

force_deploy:
  git push --force heroku dev:master
