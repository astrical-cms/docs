import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';

export default class DocsPlanCommand extends BaseCommand {
    static usage = 'docs plan';
    static description = 'Plan documentation updates based on analysis.';
    static requiresProject = true;

    async run(options: any) {
        if (!this.projectRoot) {
            this.error('Project root not found.');
            return;
        }

        const documentation = new Documentation(this, this.projectRoot);
        await documentation.run('plan.md', 'generate plan');
    }
}
