#!/bin/bash

set -e

# echo "Running database migrations"
# yarn migrate

# echo "Seeding database"
# yarn seed

echo "Starting migration"
yarn migrate
echo "Starting server"
yarn start