const player_id = 'zonePlayer'
const src_attribute = 'data-src'

// Get the player's part with a source url
let src_holder = document.getElementById(player_id)
if (src_holder) {
    // Get the source url
    let raw_wat_url = src_holder.getAttribute(src_attribute)
    console.log(`Found WAT src : ${raw_wat_url}`)
    let wat_url = raw_wat_url.replace(/^\/\//, '')
    console.log(`Cleaned up WAT url : ${wat_url}`)

} else {
    // If player_id not found
    console.log(`Can't find #${player_id}`)
}