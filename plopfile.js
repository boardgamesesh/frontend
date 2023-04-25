module.exports = (plop) => {
  plop.setGenerator("basic component", {
    description: "Generate a basic component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the component name?",
      },
      {
        type: "confirm",
        name: "isHoneycombComponent",
        message: "Is this a Honeycomb Component?",
        default: false,
      },
    ],
    actions: ({ isHoneycombComponent }) => {
      let destination = "components";

      if (isHoneycombComponent) {
        destination = "packages/honeycomb";
      }

      return [
        {
          type: "addMany",
          destination: `${destination}/{{pascalCase componentName}}`,
          base: "plop-templates/basic-component",
          templateFiles: "plop-templates/basic-component/**/*.hbs",
          skipIfExists: true,
        },
        {
          type: "modify",
          path: `${destination}/{{pascalCase componentName}}/index.ts`,
          transform: (content, answers) => {
            const componentName = plop.getHelper("pascalCase")(
              answers.componentName
            );
            const exportStatement = `export * from "./src/${componentName}"`;

            if (content.includes(exportStatement)) return content;

            return `${content.trim()}\n${exportStatement}\n`;
          },
        },
      ];
    },
  });
};
