const pipeline = {
  steps: [],
};

for (let i = 1; i <= 50; i++) {
  pipeline.steps.push({
    command: `sleep ${i * 2}`,
    label: `Sleep ${i * 2} seconds`,
  });
}

console.log(JSON.stringify(pipeline));
