import { BaseCommand, logger } from '@nexical/cli-core';
import { Gemini } from './gemini';
import fs from 'fs-extra';
import path from 'node:path';

export class Documentation {
    private command: BaseCommand;
    private projectRoot: string;

    constructor(command: BaseCommand, projectRoot: string) {
        this.command = command;
        this.projectRoot = projectRoot;
    }

    /**
     * Runs a documentation command.
     * @param prompt - The prompt to feed to Gemini CLI
     * @param taskDescription - Description of the task to perform
     */
    async run(prompt: string, taskDescription: string): Promise<void> {
        const promptsDir = path.join(this.projectRoot, 'prompts');
        const promptFile = path.join(promptsDir, prompt);

        if (!fs.existsSync(promptFile)) {
            logger.warn(`Prompt file not found: ${promptFile}`);
            return;
        }

        this.command.info(`Running documentation task: ${taskDescription}...`);

        const promptContent = await fs.readFile(promptFile, 'utf8');
        const gemini = new Gemini(this.projectRoot);

        try {
            const result = await gemini.prompt(promptContent);
            this.command.info(`--- Documentation Task: ${taskDescription} ---`);
            this.command.info(result);
            this.command.info('------------------------------');
        } catch (error: any) {
            this.command.error(`Failed to run documentation task: ${taskDescription}: ${error.message}`);
        }
    }
}
