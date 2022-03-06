### DOCS for build: https://docs.docker.com/engine/reference/commandline/build/
# By default the docker build command will look for a Dockerfile at the root of the build context. 
# ".." is the path for the context

docker image build -t portfolio-app:2 -f Dockerfile ..
docker image build -t portfolio-app:0.18 -f devops/Dockerfile .
docker image build -t portfolio-app:2.20 -f devops/Dockerfile.2 .
echo "Docker image created"

echo "Docker images:"
docker image ls


### DOCS for run: https://docs.docker.com/engine/reference/commandline/run/

docker container run -p 8080:3000 portfolio-web:0.4
docker container run -p 8080:3000 --name portfolio-app portfolio-app:5 
docker container run -it --entrypoint sh portfolio-app:2.18

docker container run -p 8080:3000 --name portfolio-app-0.18 --env-file .env.local portfolio-app:0.18
docker container run -p 8080:3000 --name portfolio-app-2.18 --env-file .env.local portfolio-app:2.18


read -p "Press [Enter] key to continue..."

