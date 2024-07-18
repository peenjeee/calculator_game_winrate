(function () {
    "use strict";
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "button",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
})();

function calculateWinRate() {
    var totalGames = document.getElementById('totalGames').value;
    var totalWins = document.getElementById('totalWins').value;
    if (totalGames && totalWins) {
        if (parseInt(totalWins) > parseInt(totalGames)) {
            alert('Total menang tidak bisa lebih besar dari Total Game!');
        } else {
            var totalLosses = totalGames - totalWins;
            var winRate = (totalWins / totalGames) * 100;

            document.getElementById('winRateResult').value = winRate.toFixed(1) + '%';
            document.getElementById('lossesResult').value = totalLosses.toFixed(0) + ' Match';
        }
    } else {
        alert('Harap masukkan total game dan match menang!');
    }
}

function calculateWinsForDesiredWinRate() {
    var totalGames = parseFloat(document.getElementById('totalGames').value);
    var currentWinRate = parseFloat(document.getElementById('currentWinRate').value);
    var desiredWinRate = parseFloat(document.getElementById('desiredWinRate').value);
    if (desiredWinRate < currentWinRate) {
        if (!isNaN(totalGames) && !isNaN(currentWinRate) && !isNaN(desiredWinRate)) {
            if (parseFloat(desiredWinRate) <= 0) {
                alert('Winrate yang diinginkan tidak boleh sama atau lebih dari 0!');
            } else {
                var fnz = parseFloat(totalGames * (currentWinRate / 100));
                var fanz = parseFloat(fnz / (desiredWinRate / 100));
                var fanzy = parseInt(fanz - totalGames);
                document.getElementById('additionalWinsNeeded').value = fanzy.toFixed(0) + ' Kalah';
            }
        } else {
            alert('Masukkan total game dan winrate sekarang serta winrate kemudian!');
        }
    } else {
        if (!isNaN(totalGames) && !isNaN(currentWinRate) && !isNaN(desiredWinRate)) {
            if (parseFloat(desiredWinRate) >= 100) {
                alert('Winrate yang diinginkan tidak boleh sama atau lebih dari 100!');
            } else {
                var pnj = parseFloat(desiredWinRate - currentWinRate) * totalGames;
                var pnje = parseFloat(100 - desiredWinRate);
                var peenje = parseInt(pnj / pnje);
                document.getElementById('additionalWinsNeeded').value = peenje.toFixed(0) + ' Menang';
            }
        } else {
            alert('Masukkan total game dan winrate sekarang serta winrate kemudian!');
        }
    }
}

function calculateWinsLoss() {
    var totalGames = parseFloat(document.getElementById('totalGames').value);
    var currentWinRate = parseFloat(document.getElementById('currentWinRate').value);
    if (!isNaN(totalGames) && !isNaN(currentWinRate)) {
        if (parseFloat(currentWinRate) > 100 || (parseFloat(currentWinRate) < 0)) {
            alert('Winrate tidak bisa kurang dari 0 atau lebih dari 100!');
        } else {
            var mng = parseFloat(totalGames * currentWinRate / 100);
            var klh = parseFloat(totalGames - mng);
            document.getElementById('additionalWins').value = mng.toFixed(0) + ' Match';
            document.getElementById('additionalLoss').value = klh.toFixed(0) + ' Match';
        }
    } else {
        alert('Masukkan total game dan winrate sekarang!');
    }
}

function wrnaik() {
    var totalGames = parseFloat(document.getElementById('totalGames').value);
    var currentWinRate = parseFloat(document.getElementById('currentWinRate').value);
    var desiredWinRate = parseFloat(document.getElementById('desiredWinstreak').value);
    if (!isNaN(totalGames) && !isNaN(currentWinRate) && !isNaN(desiredWinRate)) {
        if (parseFloat(currentWinRate) > 100 || (parseFloat(currentWinRate) < 0)) {
            alert('Winrate tidak bisa kurang dari 0 atau lebih dari 100!');
        } else {
            var pnj = parseFloat(totalGames * currentWinRate / 100);
            var pnje = parseFloat(pnj + desiredWinRate);
            var pnjee = parseFloat(totalGames + desiredWinRate);
            var peenjeee = parseInt(pnje / pnjee * 100);
            document.getElementById('hasilwin').value = peenjeee.toFixed(1) + '%';
        }
    } else {
        alert('Masukkan total game dan winrate sekarang serta match winstreak!');
    }
}

function wrlose() {
    var totalGames = parseFloat(document.getElementById('totalGames').value);
    var currentWinRate = parseFloat(document.getElementById('currentWinRate').value);
    var desiredWinRate = parseFloat(document.getElementById('desiredLosestreak').value);
    if (!isNaN(totalGames) && !isNaN(currentWinRate) && !isNaN(desiredWinRate)) {
        if (parseFloat(currentWinRate) > 100 || (parseFloat(currentWinRate) < 0)) {
            alert('Winrate tidak bisa kurang dari 0 atau lebih dari 100!');
        } else {
            var pnj = parseFloat(totalGames * currentWinRate / 100);
            var pnje = parseFloat(pnj - desiredWinRate);
            var pnjee = parseFloat(totalGames + desiredWinRate);
            var peenjeee = parseInt(pnje / pnjee * 100);
            document.getElementById('hasillose').value = peenjeee.toFixed(1) + '%';
        }
    } else {
        alert('Masukkan total game dan winrate sekarang serta match winstreak!');
    }
}

function hitcv() {
    var cr = parseFloat(document.getElementById('cr').value);
    var cd = parseFloat(document.getElementById('cd').value);
    if (!isNaN(cd) && !isNaN(cr)) {
        var crd = cr * 2;
        var total = parseFloat(crd + cd);
        if (total < 0 && total <= 10) {
            document.getElementById('hasil').value = total.toFixed(1) + '% No upgrades';
        } else if (total > 10 && total <= 20) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Rata-Rata';
        } else if (total > 20 && total <= 30) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Bagus';
        } else if (total > 30 && total <= 40) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Sangat Bagus';
        } else if (total > 40 && total <= 50) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Permata';
        } else if (total > 50 && total <= 60) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Sempurna';
        } else {
            document.getElementById('hasil').value = 'Nilai CV tidak valid';
        }
    } else {
        alert('Masukkan CR dan CD!');
    }
}

function hitch() {
    var cr = parseFloat(document.getElementById('cr').value);
    var cd = parseFloat(document.getElementById('cd').value);
    if (!isNaN(cd) && !isNaN(cr)) {
        var crd = cr * 2;
        var total = parseFloat(crd + cd);
        if (total === 0) {
            document.getElementById('hasil').value = total.toFixed(1) + '% No upgrades';
        } else if (total < 200) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Kurang';
        } else if (total >= 200 && total < 240) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Normal';
        } else if (total >= 240 && total <= 300) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Ideal';
        } else if (total > 300) {
            document.getElementById('hasil').value = total.toFixed(1) + '% Sangat Bagus';
        } else {
            document.getElementById('hasil').value = 'Nilai CV tidak valid';
        }
    } else {
        alert('Masukkan CR dan CD!');
    }
}

function hitdmg() {
    var atk = parseFloat(document.getElementById('atk').value);
    var db = parseFloat(document.getElementById('db').value);
    var sd = parseFloat(document.getElementById('sd').value);
    var lc = parseFloat(document.getElementById('lc').value);
    var lm = parseFloat(document.getElementById('lm').value);
    var rm = parseFloat(document.getElementById('rm').value);
    var crit = parseFloat(document.getElementById('crit').value);
    if (!isNaN(atk) && !isNaN(db) && !isNaN(sd) && !isNaN(lc) && !isNaN(lm) && !isNaN(rm) && !isNaN(crit)) {
        var awal = parseFloat(atk * (1 + (db / 100)) * (sd / 100));
        var def = parseFloat((lc + 100) / (lc + lm + 200));
        var res = parseFloat(1 - (rm / 100));
        var defs = parseFloat(5 * (lm) + 500);
        var reduc = parseFloat(defs / (defs + 5 * (lc) + 500));
        var reduction = parseInt(reduc * 100);
        var hasil = parseInt(awal * def * res);
        document.getElementById('hasil').value = hasil.toFixed(0);
        var crits = parseInt(hasil * (1 + (crit / 100)));
        document.getElementById('hasilcrit').value = crits.toFixed(0);
    } else {
        alert('Masukkan semua stats!');
    }
}

function hitkda() {
    var kill = parseFloat(document.getElementById('kill').value);
    var mati = parseFloat(document.getElementById('mati').value);
    var supp = parseFloat(document.getElementById('supp').value);
    if (!isNaN(kill) && !isNaN(mati) && !isNaN(supp)) {
        if (mati === 0) {
            var hakd = parseFloat(kill / (mati + 1));
            var hakda = parseFloat((kill + supp) / (mati + 1));
            document.getElementById('kd').value = hakd.toFixed(1);
            document.getElementById('kda').value = hakda.toFixed(1);
        }
        else {
            var hakd = parseFloat(kill / mati);
            var hakda = parseFloat((kill + supp) / mati);
            document.getElementById('kd').value = hakd.toFixed(1);
            document.getElementById('kda').value = hakda.toFixed(1);
        }
    } else {
        alert('Masukkan total kills, death beserta assist!');
    }
}