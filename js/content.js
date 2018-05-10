// These are made for the player of tf1
const player_id = 'zonePlayer'
const src_attribute = 'data-src'
const new_container = 'menu_video_program'

// Place a given element in the new_container
let placeNewElement = (element) => {
    // Find a place where we want to put our new player
    let new_places = document.getElementsByClassName(new_container)
    if (new_places.length > 0) {
        let new_place = new_places[0]
        console.log(`Found new place : ${new_places}`)
        new_place.innerHTML += element
    } else {
        // If we didn't find the new place
        console.log(`Can't find .${new_container}`)
    }
}

// Create a new link element with a given url
let createNewElement = (wat_url) => {
    let new_element_string = `
    <div class="no-ads-container">
        <a href="${wat_url}" target="_blank" class="no-ads-link">
            <span>No ads, please</span>
        </a>
    </div>`
    return new_element_string
}

// Actual execution comes here
// Get the player's part with a source url
let src_holder = document.getElementById(player_id)
if (src_holder) {
    // Get the source url
    let raw_wat_url = src_holder.getAttribute(src_attribute)
    console.log(`Found WAT src : ${raw_wat_url}`)
    let wat_url = raw_wat_url.replace(/^\/\//, 'http://')
    console.log(`Cleaned up WAT url : ${wat_url}`)

    let new_button_string = createNewElement(wat_url)
    placeNewElement(new_button_string)
} else {
    // If player_id not found
    console.log(`Can't find #${player_id}`)
}

