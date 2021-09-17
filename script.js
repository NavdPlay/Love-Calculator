function calculate() {
    var randomized = Math.floor(Math.random() * 101);
    var randomWord = Math.floor(Math.random() * 2);

    var red = [`Tombol surrend ada di pengaturan.`, `Sorry, w gapunya nomor telpon dukun`];
    var orange = [`Bjir, ${randomized}% doang, kasian.`, `Cuma ${randomized}% doang sih, tapi boleh dicoba`];
    var yellow = [`Tenang, masih kuning, peluang masih besar.`, `Lumayan dapet kuning ya kan.`];
    var green = [`Gasken lah, warna ijo nih, peluang besar.`, `Tinggal nunggu waktu nih, maju terus pantang mundur.`];
    var absoluteGreen = [`Wah, life mod apk nih, downloadnya di HappyMod fix.`, `Pake guna-guna fix, ga salah lagi`];
    var name1 = document.getElementById('name-1').value;
    var name2 = document.getElementById('name-2').value;

    if ((name1 == '' || name1 == undefined) && (name2 == '' || name2 == undefined)) {
        $('#popup-1-container').css('display', 'block');
        $('#popup-2-container').css('display', 'block');
        return true;
    } else if (name1 == '' || name1 == undefined) {
        $('#popup-1-container').css('display', 'block');
        return true;
    } else if (name2 == '' || name2 == undefined) {
        $('#popup-2-container').css('display', 'block');
        return true;
    }

    $('.input-container').hide();
    $('#meter-fill').width(randomized + '%');
    $('#meter-percent').html(randomized + '%');
    document.getElementById('love').style.left = randomized + '%';

    if (randomized < 5) {
        $('#meter-fill').width('5%');
        $('#meter-percent').html('5%');
    }

    if (randomized < 23) {
        document.getElementById('meter-fill').style.backgroundColor = 'red';
        document.getElementById('desc').innerHTML = red[randomWord];
        $('#people').append(`${name1} <i class="fas fa-heart-broken upper-love"></i> ${name2}`);
    } else if (randomized < 45) {
        document.getElementById('meter-fill').style.backgroundColor = 'orange';
        document.getElementById('desc').innerHTML = orange[randomWord];
        $('#people').append(`${name1} <i class="fas fa-heart upper-love"></i> ${name2}`);
    } else if (randomized < 67) {
        document.getElementById('meter-fill').style.backgroundColor = 'yellow';
        document.getElementById('desc').innerHTML = yellow[randomWord];
        $('#people').append(`${name1} <i class="fas fa-heart upper-love"></i> ${name2}`);
    } else if (randomized < 90) {
        document.getElementById('meter-fill').style.backgroundColor = '#00ff00';
        document.getElementById('desc').innerHTML = green[randomWord];
        $('#people').append(`${name1} <i class="fas fa-heart upper-love"></i> ${name2}`);
    } else {
        document.getElementById('meter-fill').style.backgroundColor = '#00ff00';
        document.getElementById('desc').innerHTML = absoluteGreen[randomWord];
        $('#people').append(`${name1} <i class="fas fa-heart upper-love"></i> ${name2}`);
    }
}

$('#name-1').keyup(function () {
    $('#popup-1-container').css('display', 'none');
});

$('#name-2').keyup(function () {
    $('#popup-2-container').css('display', 'none');
});

function off() {
    document.getElementById('overlay-container').style.display = 'none';
}
