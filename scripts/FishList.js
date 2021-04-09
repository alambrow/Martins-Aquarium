// Import the function that returns a copy of the fish array
import {fishObjects} from './database'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = createList(fishObjects)

    // Start building a string filled with HTML syntax
    const htmlString = '<section class="fishtypes">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        // it adds to the string through concatentation
        htmlString += `<section class="fish">
            <div class="fish_banner">${fish.name}</div>
            <div><img  class="fish_image" src="${fish.image}" /></div>
            <div class="fish_species">${fish.latin}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}