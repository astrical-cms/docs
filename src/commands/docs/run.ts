import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation.ts';
import * as constants from '../../utils/constants.ts';

export default class DocsRunCommand extends BaseCommand {
    static usage = 'docs run';
    static description = 'Run the specified documentation generation sequence.';
    static requiresProject = true;

    async run(options: any) {
        const documentation = new Documentation(this, this.projectRoot as string);

        this.info('Starting full documentation generation sequence...');

        const tasks = new Map<string, string>([
            [constants.ANALYZE_CORE_PROMPT, constants.ANALYZE_CORE_TASK],
            [constants.ANALYZE_CLI_PROMPT, constants.ANALYZE_CLI_TASK],
            [constants.PLAN_PROMPT, constants.PLAN_TASK],
            [constants.TEMPLATE_PROMPT, constants.TEMPLATE_TASK],
            [constants.OUTLINE_PROMPT, constants.OUTLINE_TASK],
            [constants.GENERATE_PROMPT, constants.GENERATE_TASK],
            [constants.STYLE_PROMPT, constants.STYLE_TASK]
        ]);

        for (const [prompt, task] of tasks) {
            await documentation.run(prompt, task);
        }

        this.success('Documentation generation sequence completed.');
    }
}
