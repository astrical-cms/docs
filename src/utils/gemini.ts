import { logger } from '@nexical/cli-core';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

export interface GeminiOptions {
    cwd?: string;
    json?: boolean;
}

export class Gemini {
    private cwd: string;

    constructor(cwd: string = process.cwd()) {
        this.cwd = cwd;
    }

    /**
     * Runs a Gemini command.
     * @param info - The command to run (e.g. "prompt 'Analyze this'")
     * @param options - Execution options
     */
    async run(command: string, options: GeminiOptions = {}): Promise<string> {
        const fullCommand = `gemini --yolo ${command}`;
        const cwd = options.cwd || this.cwd;

        logger.debug(`Running Gemini command: ${fullCommand} in ${cwd}`);

        try {
            const { stdout, stderr } = await execAsync(fullCommand, { cwd });
            if (stderr) {
                logger.warn(`Gemini stderr: ${stderr}`);
            }
            return stdout.trim();
        } catch (error: any) {
            logger.error(`Gemini command failed: ${error.message}`);
            throw error;
        }
    }

    async prompt(prompt: string): Promise<string> {
        return this.run(`prompt "${prompt.replace(/"/g, '\\"')}"`);
    }
}
