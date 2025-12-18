import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation.ts';
import * as constants from '../../utils/constants.ts';

export default class DocsTemplateCommand extends BaseCommand {
    static usage = 'docs template';
    static description = 'Generate reusable content templates.';
    static requiresProject = true;

    async run(options: any) {
        const documentation = new Documentation(this, this.projectRoot as string);
        await documentation.run(constants.TEMPLATE_PROMPT, constants.TEMPLATE_TASK);
    }
}
