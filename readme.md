# Welcome to Nodejs Typescript Blueprint 

## Install Code dependency
```
npm install
```

## Compile Code 
```
grunt default
```

## Create Image
```
docker build -t casacloud/nodejstemplate:v1.0.0 .
```

## Run Container based on image
docker run -p 9001:9001 casacloud/nodejstemplate:v1.0.0