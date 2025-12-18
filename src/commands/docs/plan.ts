import { BaseCommand } from '@nexical/cli-core';
import { Documentation } from '../../utils/documentation';
import * as constants from '../../utils/constants';

export default class DocsPlanCommand extends BaseCommand {
    static usage = 'docs plan';
    static description = 'Plan documentation updates based on analysis.';
    static requiresProject = true;

    async run(options: any) {
        const documentation = new Documentation(this, this.projectRoot as string);
        await documentation.run(constants.PLAN_PROMPT, constants.PLAN_TASK);
    }
}
