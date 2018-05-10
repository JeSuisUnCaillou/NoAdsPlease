const player_id = 'zonePlayer'
const src_attribute = 'data-src'
const new_container = 'description_container'
// Get the player's part with a source url
let src_holder = document.getElementById(player_id)
if (src_holder) {
    // Get the source url
    let raw_wat_url = src_holder.getAttribute(src_attribute)
    console.log(`Found WAT src : ${raw_wat_url}`)
    let wat_url = raw_wat_url.replace(/^\/\//, 'http://')
    console.log(`Cleaned up WAT url : ${wat_url}`)

    // Find a place where we want to put our new player
    let new_places = document.getElementsByClassName(new_container)
    if (new_places.length > 0) {
        let new_place = new_places[0]
        console.log(`Found new place : ${new_place.innerHTML}`)
        new_place.innerHTML += `
        <div class="no-ads-container">
            <a href="${wat_url}" target="_blank" class="no-ads-link">
                <span class="icon-heart-empty iconTF1 no-ads-heart"></span>
                <span>NO ADS PLEASE</span>
            </a>
        </div>`
    } else {
        // If we didn't find the new place
        console.log(`Can't find .${new_container}`)
    }
} else {
    // If player_id not found
    console.log(`Can't find #${player_id}`)
}