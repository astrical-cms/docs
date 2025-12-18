import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';

export default class DocsStyleCommand extends BaseCommand {
    static usage = 'docs style';
    static description = 'Update and refine site styling.';
    static requiresProject = true;

    async run(options: any) {
        if (!this.projectRoot) {
            this.error('Project root not found.');
            return;
        }

        const documentation = new Documentation(this, this.projectRoot);
        await documentation.run('style.md', 'update styling');
    }
}
