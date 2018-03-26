#!/usr/bin/env bash

function build () {
  docker build --no-cache -t chbb-chatbot .
}

function networkUp () {
  docker-compose up -d  2>&1

  if [ $? -ne 0 ]; then
    echo "ERROR !!!! Unable to start network"
    docker logs -f chatbot
    exit 1
  fi

  docker logs -f chatbot
}

function networkDown () {
  docker-compose down
}

while getopts "m:" opt; do
  case "$opt" in
    m) MODE=$OPTARG
    ;;
  esac
done

export MODE=${MODE}
#Create the network using docker compose
if [ "${MODE}" == "build" ]; then
  build
  elif [ "${MODE}" == "create" ]; then
  networkUp
  elif [ "${MODE}" == "up" ]; then
  networkUp
  elif [ "${MODE}" == "down" ]; then
  networkDown
  elif [ "${MODE}" == "restart" ]; then
  networkDown
  networkUp
fi
