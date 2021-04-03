var fs = require('fs');

var characterfile;

function loadFile() {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
        bodyAppend("p", "The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('file-selector');
    if (!input) {
        bodyAppend("p", "Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
        bodyAppend("p", "This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        bodyAppend("p", "Please select a file before clicking 'Load'");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }

    function receivedText() {
        showResult(fr, "Text");
        fr = new FileReader();
        fr.readAsText(file);
    }

}

function showResult(fr, label) {
    var result;
    result = fr.result;
    /*bodyAppend("p", label + " (" + result.length + "):");
    bodyAppend("pre", result); */
    characterfile = JSON.parse(result);
    console.log(characterfile);

    document.getElementById("charname").value=characterfile.charname;
    document.getElementById("natureza").value=characterfile.natureza;
    document.getElementById("tradition").value=characterfile.tradition;

    document.getElementById("playername").value=characterfile.playername;
    document.getElementById("essence").value=characterfile.essence;
    document.getElementById("comportamento").value=characterfile.comportamento;

    document.getElementById("cronica").value=characterfile.cronica;
    document.getElementById("mentor").value=characterfile.mentor;
    document.getElementById("cabala").value=characterfile.cabala;

    document.getElementById("forca").value=characterfile.forca;
    document.getElementById("carisma").value=characterfile.carisma;
    document.getElementById("percepcao").value=characterfile.percepcao;

    document.getElementById("destreza").value=characterfile.destreza;
    document.getElementById("manipulacao").value=characterfile.manipulacao;
    document.getElementById("inteligencia").value=characterfile.inteligencia;

    document.getElementById("vigor").value=characterfile.vigor;
    document.getElementById("aparencia").value=characterfile.aparencia;
    document.getElementById("raciocinio").value=characterfile.raciocinio;

    document.getElementById("prontidao").value=characterfile.prontidao;
    document.getElementById("do").value=characterfile.do;
    document.getElementById("computador").value=characterfile.computador;
    
    document.getElementById("esportes").value=characterfile.esportes;
    document.getElementById("conducao").value=characterfile.conducao;
    document.getElementById("cosmologia").value=characterfile.cosmologia;

    document.getElementById("consciencia").value=characterfile.consciencia;
    document.getElementById("etiqueta").value=characterfile.etiqueta;
    document.getElementById("cultura").value=characterfile.cultura;

    document.getElementById("briga").value=characterfile.briga;
    document.getElementById("armasdefogo").value=characterfile.armasdefogo;
    document.getElementById("enigmas").value=characterfile.enigmas;

    document.getElementById("esquiva").value=characterfile.esquiva;
    document.getElementById("lideranca").value=characterfile.lideranca;
    document.getElementById("investigacao").value=characterfile.investigacao;

    document.getElementById("interpretacao").value=characterfile.interpretacao;
    document.getElementById("meditacao").value=characterfile.meditacao;
    document.getElementById("direito").value=characterfile.direito;

    document.getElementById("instrucao").value=characterfile.instrucao;
    document.getElementById("armasbrancas").value=characterfile.armasbrancas;
    document.getElementById("linguistica").value=characterfile.linguistica;

    document.getElementById("intuicao").value=characterfile.intuicao;
    document.getElementById("pesquisa").value=characterfile.pesquisa;
    document.getElementById("erudicao").value=characterfile.erudicao;

    document.getElementById("intimidacao").value=characterfile.intimidacao;
    document.getElementById("furtividade").value=characterfile.furtividade;
    document.getElementById("medicina").value=characterfile.medicina;

    document.getElementById("manha").value=characterfile.manha;
    document.getElementById("sobrevivencia").value=characterfile.sobrevivencia;
    document.getElementById("ocultismo").value=characterfile.ocultismo;

    document.getElementById("labia").value=characterfile.labia;
    document.getElementById("tecnologia").value=characterfile.tecnologia;
    document.getElementById("ciencia").value=characterfile.ciencia;

    document.getElementById("correspondencia").value=characterfile.correspondencia;
    document.getElementById("vida").value=characterfile.vida;
    document.getElementById("primordio").value=characterfile.primordio;

    document.getElementById("entropia").value=characterfile.entropia;
    document.getElementById("mente").value=characterfile.mente;
    document.getElementById("espirito").value=characterfile.espirito;

    document.getElementById("forcas").value=characterfile.forcas;
    document.getElementById("materia").value=characterfile.materia;
    document.getElementById("tempo").value=characterfile.tempo;

    document.getElementById("antecedente1").value=characterfile.antecedente1;
    document.getElementById("antecedente1valor").value=characterfile.antecedente1valor;

    document.getElementById("antecedente2").value=characterfile.antecedente2;
    document.getElementById("antecedente2valor").value=characterfile.antecedente2valor;

    document.getElementById("antecedente3").value=characterfile.antecedente3;
    document.getElementById("antecedente3valor").value=characterfile.antecedente3valor;

    document.getElementById("antecedente4").value=characterfile.antecedente4;
    document.getElementById("antecedente4valor").value=characterfile.antecedente4valor;

    document.getElementById("antecedente5").value=characterfile.antecedente5;
    document.getElementById("antecedente5valor").value=characterfile.antecedente5valor;

    document.getElementById("arete").value=characterfile.arete;
    document.getElementById("vontademax").value=characterfile.vontademax;
    document.getElementById("vontade").value=characterfile.vontade;
    document.getElementById("quint").value=characterfile.quint;
    document.getElementById("paradoxo").value=characterfile.paradoxo;
    document.getElementById("vitalidade").value=characterfile.vitalidade;

    document.getElementById("exp").value=characterfile.exp;

}

function bodyAppend(tagName, innerHTML) {
    var elm;

    elm = document.createElement(tagName);
    elm.innerHTML = innerHTML;
    document.body.appendChild(elm);
}

var CharacterSave;

function SubmitForm()
{
    console.log(document.querySelectorAll("#mainform  input"))

    CharacterSave = Array.from(document.querySelectorAll("#mainform  input")).reduce((acc, input) => ({...acc,[input.id]: input.value }),{} );
    console.log(CharacterSave);

    fs.writeFile(CharacterSave.charname+".json", JSON.stringify(CharacterSave), function(err) {
        if (err) {
            console.log(err);
        }
    });
}