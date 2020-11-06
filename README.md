# Chain of Responsibility in Typescript
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-chain-of-responsibility-implementation)


## What is it?
It's just my take at implementing the Chain of Responsibility Pattern in typescript, with a set of sentence handlers. Similar to how Middleware/ Filter chaining is implemented in .Net Core. [.Net Core MVC Filters](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/filters).

## Why?
Because I like the simplistic, reusability of this implementation, versus implementations that require you to set the next handler instance on the previous handler instance, [Such as this](https://refactoring.guru/design-patterns/chain-of-responsibility/typescript/example), and I couldn't find a good example googling around.