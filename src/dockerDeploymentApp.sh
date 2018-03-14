echo "Please Wait...." 
REPO="862133575039.dkr.ecr.us-east-2.amazonaws.com/AppName"
TAG=":Build_$1"

#echo "First arg: $1"

ROOT_PATH="/home/btecit/AppName/App/"$1"/AppName"
echo "Getting details from $ROOT_PATH "

echo Start ng build
#sudo cp -R node_modules $ROOT_PATH/
cd $ROOT_PATH
ng build
#cp Dockerfile ./dist
#cd ./dist
sudo docker build -t 862133575039.dkr.ecr.us-east-2.amazonaws.com/AppName:latest .
sudo docker build -t ${REPO}${TAG} .

echo docker image build successfully...

echo Docker image name : ${REPO}${TAG}
sudo docker stop $(sudo docker ps -a -q --filter ancestor=862133575039.dkr.ecr.us-east-2.amazonaws.com/AppName --format="{{.ID}}")

sudo docker run  -d -p 4200:80 862133575039.dkr.ecr.us-east-2.amazonaws.com/AppName
#sudo docker run  -d -p 4200:80 862133575039.dkr.ecr.us-east-2.amazonaws.com/AppName
echo App deployed successfully...