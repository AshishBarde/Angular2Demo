echo "Please Wait...." 
REPO="862133575039.dkr.ecr.us-east-2.amazonaws.com/spring-benefit/benefit-app"
TAG=":UAT_$1"

#echo "First arg: $1"

ROOT_PATH="/home/btecit/SpringBenefit/patch/App/"$1"/SpringBenefitApp"
echo "Retriving details from $ROOT_PATH "

echo Start ng build
cd $ROOT_PATH
ng build 
#cp Dockerfile ./dist
#cd ./dist
#sudo docker build -t 862133575039.dkr.ecr.us-east-2.amazonaws.com/spring-benefit/benefit-app:latest . 
sudo docker build -t ${REPO}${TAG} .

echo docker image build successfully...

sudo $(aws ecr get-login --no-include-email)

sudo docker push ${REPO}${TAG}


echo Docker image name : ${REPO}${TAG}
#sudo docker stop $(sudo docker ps -a -q --filter ancestor=862133575039.dkr.ecr.us-east-2.amazonaws.com/spring-benefit/benefit-app --format="{{.ID}}")

#sudo docker run  -d -p 4203:80 862133575039.dkr.ecr.us-east-2.amazonaws.com/spring-benefit/benefit-app
echo App deployed successfully...
