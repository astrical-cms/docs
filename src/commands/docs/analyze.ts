import { BaseCommand, logger } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';
import fs from 'fs-extra';
import path from 'node:path';

export default class DocsAnalyzeCommand extends BaseCommand {
    static usage = 'docs analyze';
    static description = 'Analyze the Astrical Core and CLI codebases for documentation updates.';
    static requiresProject = true;

    async run(options: any) {
        if (!this.projectRoot) {
            this.error('Project root not found.');
            return;
        }

        const documentation = new Documentation(this, this.projectRoot);
        const projects = ['core', 'cli'];

        for (const project of projects) {
            const projectDir = path.join(this.projectRoot, 'src', project);

            if (!fs.existsSync(projectDir)) {
                logger.warn(`Project directory not found: ${projectDir}`);
                continue;
            }
            await documentation.run(`analyze-${project}.md`, `analyze ${project}`);
        }
    }
}
