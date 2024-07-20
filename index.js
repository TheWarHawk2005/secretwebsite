function unleashRick() {
    var video = document.getElementById('video');
    video.play();

    document.querySelector('#button-container').style.display = 'none'
    document.querySelector('#caption-container').style.display = 'block'
    document.querySelector('#black-screen').style.opacity = 0
    num = ''
    if (localStorage.getItem('viewed')) {
        num = localStorage.getItem('viewed')
        document.querySelector('#num').innerHTML = num

    } else {
        xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://jsonblob.com/api/1264077019976425472/')
        xhr.onload = function () {
            num = JSON.parse(xhr.responseText).count
            console.log(num)
            localStorage.setItem('viewed', num)
            document.querySelector('#num').innerHTML = num

            xhr = new XMLHttpRequest()
            xhr.open('PUT', 'https://jsonblob.com/api/1264077019976425472/')
            xhr.onload = function () {
                console.log('👍')
            }
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.send(
                JSON.stringify({
                    "msg": "🗿🥚",
                    "count": Number(num)+1
                }))
        }
        xhr.send()
    }
}