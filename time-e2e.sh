#!/bin/bash

function time_command {
  command="$1"
  total_time=0

  echo "Running: $command"
  for i in {1..3}; do
    exec_time=$({ time $command > /dev/null; } 2>&1 | grep real | awk '{print $2}')

    minutes=$(echo $exec_time | awk -F'm' '{print $1}')
    seconds=$(echo $exec_time | awk -F'm' '{print $2}' | sed 's/s//')
    total_seconds=$(echo "$minutes * 60 + $seconds" | bc)
    echo "Run $i: ${total_seconds}s"

    total_time=$(echo "$total_time + $total_seconds" | bc)
  done

  average_time=$(echo "scale=3; $total_time / 3" | bc)
  echo "Average time for '$command': ${average_time}s"
  echo
}

commands=(
  "npm run cypress"
  "npm run cypress:cucumber"
  "npm run playwright"
  "npm run playwright:cucumber"
)

for cmd in "${commands[@]}"; do
  time_command "$cmd"
done
