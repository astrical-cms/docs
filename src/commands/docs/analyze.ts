import { BaseCommand, logger } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation.ts';
import * as constants from '../../utils/constants.ts';
import fs from 'fs-extra';
import path from 'node:path';

export default class DocsAnalyzeCommand extends BaseCommand {
    static usage = 'docs analyze';
    static description = 'Analyze the Astrical Core and CLI codebases for documentation updates.';
    static requiresProject = true;

    async run(options: any) {
        const projectRoot = this.projectRoot as string;
        const documentation = new Documentation(this, projectRoot);
        const projects = [
            { id: 'core', prompt: constants.ANALYZE_CORE_PROMPT, task: constants.ANALYZE_CORE_TASK },
            { id: 'cli', prompt: constants.ANALYZE_CLI_PROMPT, task: constants.ANALYZE_CLI_TASK },
        ];

        for (const project of projects) {
            const projectDir = path.join(projectRoot, 'src', project.id);

            if (!fs.existsSync(projectDir)) {
                logger.warn(`Project directory not found: ${projectDir}`);
                continue;
            }
            await documentation.run(project.prompt, project.task);
        }
    }
}
