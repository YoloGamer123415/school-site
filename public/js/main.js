window.onscroll = () => {
    document.querySelector('header').setAttribute('style', `
        background-color: rgba(37, 37, 37, ${((window.pageYOffset / window.innerHeight) + 0.1 >= 1) ? 1 : (window.pageYOffset / window.innerHeight) + 0.1});
        height: ${(80 - (window.pageYOffset / 65) <= 65) ? 65 : 80 - (window.pageYOffset / 65)}px;
    `)
}

function viewBigImage(imagePath, description) {
    var view = document.getElementById('view_image')
    view.innerHTML = `<div class="image_display"><img src="${imagePath}" alt="zoomed_image"></div><div class="text"><span>${description}</span></div>`
    document.getElementById('hidden_input').focus()
    view.classList.remove('hidden')
    view.onclick = () => {
        view.classList.add('hidden')
    }
    document.getElementById('hidden_input').onkeydown = (e) => {
        if (e.key == 'Escape' || e.which == 27 || e.keyCode == 27) {
            view.classList.add('hidden')
            document.getElementById('hidden_input').blur()
        }
    }
}
