    $(document).ready(function () {
        // Máscara para o telefone
        $('#telefone').mask('(00) 00000-0000');

        // Validação do formulário
        $('form').on('submit', function (e) {
            let nome = $('#nome').val().trim();
            let email = $('#email').val().trim();
            let telefone = $('#telefone').val().trim();
            let mensagem = $('#mensagem').val().trim();

            let erro = false;

            // Validação do nome
            if (nome === '') {
                alert('Por favor, preencha seu nome.');
                erro = true;
            }

            // Validação do email com regex
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                erro = true;
            }

            // Mensagem obrigatória
            if (mensagem === '') {
                alert('Por favor, escreva sua mensagem.');
                erro = true;
            }

            // Se houver erro, impedir envio
            if (erro) {
                e.preventDefault(); // Impede o envio do formulário
            } else {
                alert('Formulário enviado com sucesso!');
            // Limpa os campos do formulário
            $(this).trigger("reset"); // <-- esta linha limpa todos os campos
            }
        });
    });