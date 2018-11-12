#!/bin/sh
# docker run -it -p 8080:3000 -v $(pwd):/var/webserver node_express bash
# docker run -it -p 8080:3000 -v $(pwd):/var/webserver/ -w="/var/webserver/" node_express npm start
docker run -it -p 8080:3000 -v $(pwd):/var/webserver/ -w="/var/webserver/" node_express bash

