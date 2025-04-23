#!/bin/bash

# This script automates the process of testing TypeScript tasks.
# Array of task directories
tasks=("task_0" "task_1" "task_2" "task_3" "task_4" "task_5")

# Loop through each task
for task in "${tasks[@]}"; do
    echo "Testing $task..."
    cd "/0x04-TypeScript/$task"
    npm install

    if [ "$task" = "task_4" ]; then
        tsc
        echo "Task 4 compiled with tsc."
    else
        npm run build
        echo "$task built successfully."
    fi

    echo "-----------------------"
done
