
// let wat_url = $('.iframe_player').attr('data-src')
// let message = "Allez, prend cet url (sans les '//' du début) et va-t-en : " + wat_url
// let content_video = $('#content_video').insertAfter("<div>"+message+"</div>")
// let container = $('section.center.columnsContainer.pubMargin').replaceWith("<div>"+message+"</div>")
// console.log(container)
// alert(`Allez, prend cet url (sans les '//' du début) et va-t-en : ${wat_url}`)

let player_id = 'zonePlayer'
let src_holder = document.getElementById(player_id)
if (src_holder) {
    let raw_wat_url = src_holder.getAttribute('data-src')
    console.log(`Found WAT src : ${raw_wat_url}`)
} else {
    console.log(`Can't find #${player_id}`)
}