#!/usr/bin/env bash

MODE="$1"
printf "==> Mode : $MODE \n"

if [ "${MODE}" == "create" ] ; then
  mkdir /usr/local/bin -p
  cp -r ./node_modules /usr/local/bin/node_modules
  ln -s /usr/local/bin/node_modules/knex/bin/cli.js /usr/local/bin/knex

  sleep 10
  knex migrate:latest --env development
  sleep 10
#  knex seed:run --env development
fi

npm start