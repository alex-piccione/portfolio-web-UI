### DOCS for build: https://docs.docker.com/engine/reference/commandline/build/
# By default the docker build command will look for a Dockerfile at the root of the build context. 
# ".." is the path for the context

docker image build -t portfolio-app:2 -f Dockerfile ..
echo "Docker image created"

echo "Docker images:"
docker image ls


### DOCS for run: https://docs.docker.com/engine/reference/commandline/run/

docker container run -i -p 8080:3000 portfolio-app:3
docker container run -it --entrypoint sh portfolio-app:1

read -p "Press [Enter] key to continue..."