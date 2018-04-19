### Spark Networks Code challenge. 

You can access a running version here [http://kimambo.de:9000/app]

To run locally execute 

``` 
docker pull maxkimambo/sparknetworks
docker run -d -p 9000:9000 maxkimambo/sparknetworks 
```

The application should be accesible via [http://localhost:9000/app]


To build locally you would need node and angular/cli installed. 

In the root folder

```
npm install 

cd src/web/ 
 
- install Front end dependencies. 

npm install  


```

To run the api server 

```
npm start 
```

```
cd src/web  

then 

ng serve --open 

```

