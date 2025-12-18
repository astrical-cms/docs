import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';
import * as constants from '../../utils/constants';

export default class DocsTemplateCommand extends BaseCommand {
    static usage = 'docs template';
    static description = 'Generate reusable content templates.';
    static requiresProject = true;

    async run(options: any) {
        const documentation = new Documentation(this, this.projectRoot as string);
        await documentation.run(constants.TEMPLATE_PROMPT, constants.TEMPLATE_TASK);
    }
}
