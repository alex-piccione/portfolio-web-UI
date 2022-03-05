### DOCS for build: https://docs.docker.com/engine/reference/commandline/build/
# By default the docker build command will look for a Dockerfile at the root of the build context. 
# ".." is the path for the context

docker image build -t portfolio-app:2 -f Dockerfile ..
docker image build -t portfolio-app:5.7 -f devops/Dockerfile .
echo "Docker image created"

echo "Docker images:"
docker image ls


### DOCS for run: https://docs.docker.com/engine/reference/commandline/run/

docker container run -p 8080:3000 portfolio-web:0.4
docker container run -p 8080:3000 --name portfolio-app portfolio-app:5 
docker container run -it --entrypoint sh portfolio-app:1

docker container run -p 8080:3000 --name portfolio-app --env a_AWS_REGION=aaa portfolio-app:5 
docker container run -p 8080:3000 --name portfolio-app --env-file .env.local portfolio-app:5 

docker container run -p 8080:3000 --name portfolio-app-5.4 --env-file .env.local portfolio-app:5.4


read -p "Press [Enter] key to continue..."