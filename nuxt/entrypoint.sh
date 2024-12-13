#!/bin/bash
## ver 0.3 ##

# COPY BUILD FILES
sleep 5s
ls /app/.output/public/
cp -r /app/.output/public/* /app/build/
sleep 5s

# COPY BUILD FILES

# exec node "/app/.output/server/index.mjs"
