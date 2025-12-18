import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';
import * as constants from '../../utils/constants';

export default class DocsStyleCommand extends BaseCommand {
    static usage = 'docs style';
    static description = 'Update and refine site styling.';
    static requiresProject = true;

    async run(options: any) {
        const documentation = new Documentation(this, this.projectRoot as string);
        await documentation.run(constants.STYLE_PROMPT, constants.STYLE_TASK);
    }
}
