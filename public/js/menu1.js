const menuItems = document.querySelectorAll('.sidebar li a');

menuItems.forEach(item => {
    if (item.querySelector('.submenu')) {
        // ... (código para adicionar seta indicadora, se necessário) ...
    }

    if (item.dataset.target) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 

            const formularios = document.querySelectorAll('[id^="formulario-"]');
            formularios.forEach(el => el.style.display = 'none');

            const formularioId = this.dataset.target;
            const formulario = document.getElementById(formularioId);
            formulario.style.display = 'block'; 
        });
    }

    
});

//funcao do botao fechar do cadastro de orgaos
document.querySelector('#fecharOrgao').addEventListener('click', function(){
    document.querySelector('#formulario-cad-orgao').style.display = 'none'
})

//funcao do botao fechar do cadastro de instituicao
document.querySelector('#fecharIntituicao').addEventListener('click', function(){
    document.querySelector('#formulario-cad-instituicao').style.display = 'none'
})

//funcao do botao fechar do cadastro de escola
document.querySelector('#fecharEscola').addEventListener('click', function(){
    document.querySelector('#formulario-cad-escola').style.display = 'none'
})

//funcao do botao fechar do cadastro de alunos
document.querySelector('#fecharAlunos').addEventListener('click', function(){
    document.querySelector('#formulario-cad-aluno').style.display = 'none'
})


function formatarTelef(telefone) {
    let validtel = telefone.replace(/\D/g, "").substring(0, 11);
    let seqtel = validtel.split(""); 
    let telform = "";

    if (seqtel.length > 0) {
        telform += `(${seqtel.slice(0, 2).join("")}`;
    }
    if (seqtel.length > 2) {
        telform += `) ${seqtel.slice(2, 7).join("")}`;
    }
    if (seqtel.length > 6) {
        telform += ` - ${seqtel.slice(7, 11).join("")}`;
    }

    return telform;
}

document.querySelector('#telefone-resp').addEventListener('input', function(e) {
    e.target.value = formatarTelef(e.target.value);
});

document.querySelector('#telefone-escola').addEventListener('input', function(e) {
    e.target.value = formatarTelef(e.target.value);
});

document.querySelector('#telefone-SecEd').addEventListener('input', function(e) {
    e.target.value = formatarTelef(e.target.value);
});

document.querySelector('#telefone-esc-SecEd').addEventListener('input', function(e) {
    e.target.value = formatarTelef(e.target.value);
});

function formatarCep(cep){
    let validcep = cep.replace(/[^0-9,]/g, '').substring(0,8)
    let seqcep = validcep.split("")
    let cepform = ""
    
    if(seqcep.length > 0){
        cepform += `${seqcep.slice(0,2).join("")}`
    }
    if(seqcep.length > 2){
        cepform += ` ${seqcep.slice(2,5).join("")}`
    }
    if(seqcep.length > 5){
        cepform += ` - ${seqcep.slice(5,8).join("")}`
    }
    return cepform
}

document.querySelector('#cep').addEventListener('input', function(e) {
    e.target.value = formatarCep(e.target.value);
})

document.querySelector('#cep-SecEd').addEventListener('input', function(e) {
    e.target.value = formatarCep(e.target.value);
})

function formatarCnpj(cnpj){
    let validseq = cnpj.replace(/[^0-9,]/g, '').substring(0,14)
    let seqcnpj = validseq.split("")
    let cnpjform = ""

    if (seqcnpj.length > 0){
        cnpjform += `${seqcnpj.slice(0,2).join("")}`
    }
    if (seqcnpj.length > 2)
    {
        cnpjform += `.${seqcnpj.slice(2,5).join("")}`
    }
    if (seqcnpj.length > 5)
    {
        cnpjform += `.${seqcnpj.slice(5,8).join("")}`
    }
    if (seqcnpj.length > 8)
    {
        cnpjform += `/${seqcnpj.slice(8,12).join("")}`
    }
    if (seqcnpj.length > 12)
    {
        cnpjform += ` - ${seqcnpj.slice(12,14).join("")}`
    }

    return cnpjform
}

document.querySelector('#cnpj').addEventListener('input', function(e) {
    e.target.value = formatarCnpj(e.target.value);
})
document.querySelector('#cnpj-SecEd').addEventListener('input', function(e) {
    e.target.value = formatarCnpj(e.target.value);
})
document.querySelector('#cnpj-prefeitura').addEventListener('input', function(e) {
    e.target.value = formatarCnpj(e.target.value);
})
// ... outro código JavaScript (RESPONSIVIDADE FORMULARIOS) ... 

const formularios = document.querySelectorAll('.formulario');
formularios.forEach(formulario => {
  const botaoVoltar = formulario.querySelector('.voltar-btn');
  botaoVoltar.addEventListener('click', () => {
    formulario.style.display = 'none';
  });

  // Verifica se a tela é de celular ou tablet
  if (window.innerWidth <= 768) {
    // Adiciona a classe 'mobile' ao formulário
    formulario.classList.add('mobile');
  }
});