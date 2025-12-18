import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation.ts';
import * as constants from '../../utils/constants.ts';

export default class DocsOutlineCommand extends BaseCommand {
    static usage = 'docs outline';
    static description = 'Generate or update the site documentation outline.';
    static requiresProject = true;

    async run(options: any) {
        const documentation = new Documentation(this, this.projectRoot as string);
        await documentation.run(constants.OUTLINE_PROMPT, constants.OUTLINE_TASK);
    }
}
