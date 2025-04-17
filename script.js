document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const nome = document.querySelector("input[name='nome']").value.trim();
    const nascimento = document.querySelector("input[name='nascimento']").value;
    const cpf = document.querySelector("input[name='cpf']").value.trim();
    const celular = document.querySelector("input[name='celular']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const termos = document.querySelector("input[name='termos']").checked;
  
    let mensagensErro = [];
  
    if (nome === "") {
      mensagensErro.push("O nome é obrigatório.");
    }
  
    if (nascimento === "") {
      mensagensErro.push("A data de nascimento é obrigatória.");
    }
  
    if (cpf === "" || cpf.length !== 11) {
      mensagensErro.push("O CPF deve ter 11 dígitos.");
    }
  
    if (celular === "") {
      mensagensErro.push("O celular é obrigatório.");
    }
  
    if (email === "" || !email.includes("@")) {
      mensagensErro.push("Digite um e-mail válido.");
    }
  
    if (!termos) {
      mensagensErro.push("Você deve aceitar os termos.");
    }
  
    if (mensagensErro.length > 0) {
      alert("Corrija os seguintes erros:\n\n" + mensagensErro.join("\n"));
    } else {
      alert("Formulário enviado com sucesso!");
      
      this.submit(); 
    }
  });
  