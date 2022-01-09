#!/bin/bash

# https://www.computerhope.com/unix/uset.htm
# Mark variables that are modified or created for "export";
#    environment variables set in this way will be passed on to the environments of any subsequent commands.
# is thia needed?
#set -a

echo var1 = $1

envsubst '${AWS_API_ID} $1' < .env > .env_new