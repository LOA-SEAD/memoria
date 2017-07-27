var som = (function () {

    var som = 'audio/som',
    efeitoDeSom;


    (function inicializar() {
        if (suportaAudioElement()) {

            if (suportaWav()) {
                efeitoDeSom = new Audio(som + '.wav');

            } else {
                efeitoDeSom = new Audio(som + '.mp3');
            }
			efeitoDeSom.loop = false;
        }
    } ());

    function suportaAudioElement() {
        return typeof document.createElement('audio').canPlayType !== 'undefined';
    }

    function suportaWav() {
        return new Audio().canPlayType('audio/wav') !== '';
    }

    return {

        tocar: function () {
            if (efeitoDeSom !== undefined)
                efeitoDeSom.play();
        },
	};
}());

var musica = (function () {

    var som = 'audio/quimnesia',
    efeitoDeSom;


    (function inicializar() {
        if (suportaAudioElement()) {
            efeitoDeSom = new Audio(som + '.mp3');
            efeitoDeSom.loop = true;
        }
    } ());

    function suportaAudioElement() {
        return typeof document.createElement('audio').canPlayType !== 'undefined';
    }

    return {

        iniciarSom: function () {
            if (efeitoDeSom !== undefined);
                efeitoDeSom.play();
        },
        
        pausarSom: function() {
            if(efeitoDeSom !== undefined)
                efeitoDeSom.pause();
        },
        
        ajustarVolumePara: function(novoVolume) {
            if(efeitoDeSom !== undefined)
                efeitoDeSom.volume = novoVolume;
        },
    };
}());
