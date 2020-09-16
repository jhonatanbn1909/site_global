var titles = [
    "Freios",
    "Injeção Eletrônica",
    "Motor e Câmbio",
    "Suspenção",
    "Tróca de Óleo"
];

var descs = [
    "Descrição Freio",
    "Descrição Injeção Eletrônica",
    "Descrição Motor e Câmbio",
    "Descrição Suspenção",
    "Descrição Troca de Óleo",
]

function message(n){
    document.getElementById("desc").innerHTML = descs[n];
    document.getElementById("title").innerHTML = titles[n];
}

function whats(){
    location.href = "https://api.whatsapp.com/send?phone=+556799823955";
}