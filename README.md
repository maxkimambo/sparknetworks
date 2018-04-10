# Starter project structure for NodeJs Microservice.

## Temp todo

add health check

add different health check clients - Rabbit - Postgress - Mongo

Postgress

* sequelize
* migrations

add swagger

~~Add joi for validation~~

Request to other services https://github.com/mikeal/r2

# Health checks

Health check endpoint is at /health
The health controller relies on different service adapters to perform individual health checks.
these can be found under `/healthchecks` and need to be registered in the `index.js` file
Its IMPORTANT that each adapter exposes function called `health` for the health checks to work.

# Validation

Validate all incoming data by creating a validation schema in validation folder and using it to validate
the payloads in your controllers.
Check for examples in example Controller and validation/exampleSchema

## Database

[sequelize](http://docs.sequelizejs.com/) is being used.

### Create a new migration

```bash
npm run sqlz:new -- --name the-migration-name
# or using npx
npx sequelize migration:create --name the-migration-name
```

### Migrate database

```bash
npm run sqlz:migrate
# or
npx sequelize db:migrate
# for docker-compose
docker-compose run api npm run sqlz:migrate
# or if you know the name of container
docker exec nodejsstarter_api_1 npm run sqlz:migrate
```

To rollback:

```bash
npm run sqlz:undo
# or
npx sequelize db:migrate:undo
```

### Create new entity

```bash
npm run sqlz:model -- --name EntityName --attributes userId:string,status:string,data:text
# or
npx sequelize model:generate --name EntityName --attributes userId:string,status:string,data:text
```

### API documentation

Use javadoc comment style to add documentation for api endpoints.
For description of avaible options refer to http://apidocjs.com/#params

To generate / update documentation run

```
npm install -g apidoc (if not already installed) then
npm run doc
```
