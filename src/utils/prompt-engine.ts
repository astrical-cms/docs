import nunjucks from 'nunjucks';

export class PromptEngine {
    constructor() {
        // Configure nunjucks with autoescape off, as prompts typically don't need HTML escaping
        nunjucks.configure({ autoescape: false });
    }

    /**
     * Renders a template string with the provided variables.
     * @param template - The template string containing variables like {{ var }}
     * @param variables - Object containing values for the variables
     * @returns The rendered string with variables interpolated
     */
    render(template: string, variables: Record<string, any> = {}): string {
        return nunjucks.renderString(template, variables);
    }
}
