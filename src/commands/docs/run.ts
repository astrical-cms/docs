import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';

export default class DocsRunCommand extends BaseCommand {
    static usage = 'docs run';
    static description = 'Run the specified documentation generation sequence.';
    static requiresProject = true;

    async run(options: any) {
        if (!this.projectRoot) {
            this.error('Project root not found.');
            return;
        }

        const documentation = new Documentation(this, this.projectRoot);

        this.info('Starting full documentation generation sequence...');

        const tasks = new Map<string, string>([
            ['analyze-core.md', 'analyze core'],
            ['analyze-cli.md', 'analyze cli'],
            ['plan.md', 'plan documentation'],
            ['template.md', 'generate templates'],
            ['outline.md', 'generate outline'],
            ['generate.md', 'generate content'],
            ['style.md', 'update styling']
        ]);

        for (const [prompt, task] of tasks) {
            await documentation.run(prompt, task);
        }

        this.success('Documentation generation sequence completed.');
    }
}
