#!/bin/bash
if [ -z "$1" ] 
then 
    npm run cypress:run -- --env allure=true,allureResultsPath=cypress/allure_results
else 
    npm run $* -- --env allure=true,allureResultsPath=cypress/allure_results
fi 
