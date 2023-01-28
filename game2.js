let images = ['armenia', 'canada', 'maldives', 'sweden', 'syria']
let words = ['armenia', 'canada', 'maldives', 'sweden', 'syria']
let Lives = 3
let Wins = 0
let Win = new Audio('win2.wav')
let lose = new Audio('lose2.wav')
images.sort(function() {
    return Math.random() - 0.5

})
for (let i = 0; i < images.length; i++) {
    $(` <img src="${images[i]}.png" data-country="${images[i]}">`).appendTo('.images').draggable({
        'revert': true
    })
}
for (let i = 0; i < words.length; i++) {
    $(`<div class="word" data-country="${words[i]}">
            <h2>${words[i]}</h2>
        </div>`).appendTo('.words').droppable({
        'accept': 'img',
        'drop': function(e, ui) {
            let host = $(this)
            let guest = ui.draggable

            if (host.data('country') == guest.data('country')) {
                guest.draggable({
                    'revert': false
                })
                host.droppable('disable')
                guest.draggable('disable')

                guest.position({
                    of: host,
                    at: 'center',
                    my: 'center',
                })
                Wins++
                Win.play()
                if(Wins == 5){
                   alert('You Win🏆🥇🥇') 
                    window.location.href='https://youtu.be/df559nwzOM4'
                }
            } else {
                Lives--
                lose.play()
                $('#Lives').html(Lives)

                if(Lives == 0){
                    alert("IF YOU DONT COME TO BRAZIL, BRAZIL COME TO U ")
     window.location.href="https://youtu.be/vQEubVwz7Zg?t=9"             
                }
            }
        }
    })
}