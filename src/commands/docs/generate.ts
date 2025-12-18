import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';
import * as constants from '../../utils/constants';

export default class DocsGenerateCommand extends BaseCommand {
    static usage = 'docs generate';
    static description = 'Generate page content and YAML configuration.';
    static requiresProject = true;

    async run(options: any) {
        const documentation = new Documentation(this, this.projectRoot as string);
        await documentation.run(constants.GENERATE_PROMPT, constants.GENERATE_TASK);
    }
}
