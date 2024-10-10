const express = require('express'); // Assuming you're using Express
const { exec } = require('child_process'); // Add this line

const app = express();

// Function to execute a command and return a promise
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, { stdio: 'inherit' }, (error, stdout, stderr) => {
            if (error) {
                reject(`Error executing command: ${command}\n${stderr}`);
            }
            resolve(stdout);
        });
    });
}

// Function to run the npm commands based on the branch
async function run(isDev = false) {
    try {
        console.log('Installing dependencies...');
        await runCommand('npm install');

        console.log('Building the project...');
        if (isDev) {
            await runCommand('npm run dev:build');
            console.log('Starting the development server...');
            await runCommand('npm run dev:start');
        } else {
            await runCommand('npm run prod:build');
            console.log('Starting the production server...');
            await runCommand('npm run prod:start');
        }

        console.log('Application is running!');
    } catch (error) {
        console.error(error);
    }
}

// Determine the branch (you might replace this with a more reliable method)
const isDev = process.env.BRANCH === 'dev'; // Set BRANCH environment variable
run(isDev);
