import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';

export default class DocsTemplateCommand extends BaseCommand {
    static usage = 'docs template';
    static description = 'Generate reusable content templates.';
    static requiresProject = true;

    async run(options: any) {
        if (!this.projectRoot) {
            this.error('Project root not found.');
            return;
        }

        const documentation = new Documentation(this, this.projectRoot);
        await documentation.run('template.md', 'generate templates');
    }
}
