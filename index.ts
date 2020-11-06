// Import stylesheets
import './style.css';


type SentenceHandlerDelegate = (sentence: string) => string;

// 
interface ISentenceHandler {

    handle(sentence: string, next: SentenceHandlerDelegate): string;
}

/////////////////////////////////////////////////////////////
// Test Classes

class HelloWordHandler implements ISentenceHandler {

    handle(sentence: string, next: SentenceHandlerDelegate): string {
        sentence = `${sentence} Hello`;

        return next(sentence);
    }

}

class ThereWordHandler implements ISentenceHandler {

    handle(sentence: string, next: SentenceHandlerDelegate): string {
        sentence = `${sentence} There`;

        return next(sentence);
    }

}

class WorldWordHandler implements ISentenceHandler {

    handle(sentence: string, next: SentenceHandlerDelegate): string {
        sentence = `${sentence} World!`;

        return next(sentence);
    }

}

////////////////////////////////////////////////////////

/**
 * Required because of how context works with creating inline functions with Javascript.
 * So the nextDelegate is copied by value as well and not reference.
 */
function createDelegate(handler: ISentenceHandler, nextDelegate: SentenceHandlerDelegate): SentenceHandlerDelegate {
    // Create and return handler delegate
    return (sentence: string) => {
        return handler.handle(sentence, nextDelegate);
    }
}

// Define the process chain
let sentenceProcessChain: ISentenceHandler[] = [
    new HelloWordHandler(),
    new ThereWordHandler(),
    new WorldWordHandler()
];

// Define the delegate chain from a bottom up perspective
let nextDelegate: SentenceHandlerDelegate = (sentence: string) => {
    return sentence;
}

// And work our way to the very first function delegate to call
sentenceProcessChain.reverse().forEach(processor => {
    nextDelegate = createDelegate(processor, nextDelegate);
});


// Start the process chain
let helloWorldSentence = nextDelegate("Oh");

// Show your work!
console.log(helloWorldSentence);
  

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${helloWorldSentence}</h1>`;