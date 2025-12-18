import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';

export default class DocsOutlineCommand extends BaseCommand {
    static usage = 'docs outline';
    static description = 'Generate or update the site documentation outline.';
    static requiresProject = true;

    async run(options: any) {
        if (!this.projectRoot) {
            this.error('Project root not found.');
            return;
        }

        const documentation = new Documentation(this, this.projectRoot);
        await documentation.run('outline.md', 'generate outline');
    }
}
