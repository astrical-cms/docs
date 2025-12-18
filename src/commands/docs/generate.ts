import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';

export default class DocsGenerateCommand extends BaseCommand {
    static usage = 'docs generate';
    static description = 'Generate page content and YAML configuration.';
    static requiresProject = true;

    async run(options: any) {
        if (!this.projectRoot) {
            this.error('Project root not found.');
            return;
        }

        const documentation = new Documentation(this, this.projectRoot);
        await documentation.run('generate.md', 'generate content');
    }
}
