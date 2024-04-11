import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class TextService {
    homeFirstSquare() {
        return `No dia 11/03 de 2023 realizamos o dia da mulher distribuindo mais de 120 kit de higiene feminina entre moradoras da comunidade Passo da Pátria e mulheres em situação de rua`;
    }

    homeSecondSquare(part: number) {
        const parts = ['Distribuição de 90 cestas básicas por mês, totalizando 5.600 cestas básicas em 5 anos.', 'Distribuição de 170 marmitas toda semana.']

        if(part < 1 || part > parts.length)
            throw new BadRequestException('Nenhum valor informado válido.');
        
        return parts[part-1];
    }

    homeThirdSquare() {
        return `No dia 22/10 de 2023 realizamos o dia das crianças distribuindo 186 brinquedos e lanches. E em parceria com outras associações sociais (como o grupo Criando Laços) preparamos um dia de atividades recreativas com vários brinquedos.`;
    }

    homeMainText(paragraph: number) {
        const paragraphs = [
            'Há mais de cinco anos trabalhando em prol dos mais necessitados',
            'Realizamos várias ações com as pessoas menos favorecidas, que por muitas razões se encontram em condições vulneráveis (drogas, alcoolismo, problemas psiquiátricos, violência familiar, entre muitos outros).',
            'Nossa associação se destina a ajudar, orientar e amparar pessoas em situação de rua ou com recursos escassos, fornecendo um lugar para dormir e alimentação (café da manhã, almoço e janta).',
            'Fornecemos marmitas em diversos pontos da Cidade Alta e arredores.'
        ];

        if (paragraph < 1 || paragraph > paragraphs.length) {
            throw new BadRequestException('Nenhum valor informado válido.');
        }

        return paragraphs[paragraph-1];
    }

    ourHistoryWeAre(paragraph: number) {
        const paragraphs = [
            'Alimentando com amor é uma associação sem fins lucrativos com mais de 5 anos de funcionamento. No começo, usávamos um carrinho de mão para distribuir marmitas à pessoas em situação de rua, sem nenhum tipo de apoio.',
            'Conforme o projeto cresceu, passamos a fornecer um lugar para as pessoas tomarem banho e atenderem suas necessidades fisiológicas. Para isto, alugamos uma casa que contasse com banheiro externo, e adequamos os quartos para virarem dormitórios.',
            'Hoje, contamos com mais de 25 pessoas atendidas no local, entre mulheres, crianças e homens, que contam com alimentação.',
            'Grande parte dessas pessoas são dependentes químicos que por diversas razões se encontram sem apoio familiar ou estão longe de suas famílias. Mas também ajudamos pessoas vulneráveis por problemas conjugais ou separações. ',
            'Atualmente buscamos uma assessoria de assistência social permanente, bem como profissionais de saúde mental e do setor jurídico, para fornecermos um apoio social, jurídico e psicológico que seja constante e de qualidade.'
        ];

        if (paragraph < 1 || paragraph > paragraphs.length) 
            throw new BadRequestException('Nenhum valor informado válido.');

        return paragraphs[paragraph-1];
    }

    ourHistoryOurObjectiviesParagraph() {
        return 'Alimentando Com Amor tem como principal objetivo ajudar, apoiar e orientar as pessoas em situação de rua e da comunidade Passos da Pátria em questões sociais, jurídicas, psicológicas e alimentícias.';
    }

    ourHistoryOurObjectiviesWhatWeWantMake(part: number) {
        const parts = [
            'Café da manhã, almoço e janta para os moradores de rua em nossa casa de apoio;',
            '100 marmitas de forma regular aos moradores de rua em diferentes setores da cidade alta;',
            '100 cestas básicas mensalmente para os moradores cadastrados na comunidade Passo da Pátria;',
            'Kit de higiene e limpeza para os moradores e a comunidade;'
        ];

        if(part < 1 || part > parts.length)
        throw new BadRequestException('Nenhum valor informado válido.');
    
        return parts[part-1];
    }

    ourHistoryOurObjectiviesWhatWeNeed(part: number) {
        const parts = [
            'Profissionais para atendimento psicológico para os moradores da casa de apoio e outras pessoas em situação de rua;',
            'Atendimento social e jurídico para todas pessoas cadastradas;',
            'Aumentar a capacidade da casa de apoio para beneficiar mais pessoas.',
        ];

        if(part < 1 || part > parts.length)
        throw new BadRequestException('Nenhum valor informado válido.');
    
        return parts[part-1];
    }

    ourHistoryGoalsParagraph() {
        return 'Enquanto nossos objetivos são mais urgentes, nossas metas são orientações para o longo prazo.';
    }

    ourHistoryGoals(part: number) {
        const parts = [
            'Fornecer mensalmente 800 marmitas à pessoas em situação de rua.',
            'Fornecer 250 cestas básicas aos moradores da comunidade Passo da Pátria;',
            'Ter um espaço para albergar 70 pessoas vulneráveis, onde também possam ter suas necessidades básicas atendidas;',
            'Fornecer serviço de assistência social, jurídico, psicológico e psiquiátrico;',
            'Ter apoio médico;',
            'Desenvolver cursos profissionalizantes.'
        ];

        if(part < 1 || part > parts.length)
        throw new BadRequestException('Nenhum valor informado válido.');
    
        return parts[part-1];
    }

    ourHistorySideSquare() {
        return 'APOIAMOS PESSOAS EM SITUAÇÃO DE RUA, MORADORES DA COMUNIDADE PASSOS DA PATRIA SEM DISCRIMIDAR IDADE, SEXO, RAÇA, COR, CRÊDO, OU ORIENTAÇÃO SEXUAL';
    }

    helpUsBeAVoluntary(paragraph: number) {
        const paragraphs = [
            'Estamos sempre precisando de mais pessoas dispostas a ajudar com esse inestimável trabalho de base, sem a qual muitos cidadãos estariam completamente desamparados.',
            'Clicando no botão abaixo você acessará o formulário de cadastro de voluntário. Ficaremos muito felizes de ter seu apoio!',
        ];

        if(paragraph < 1 || paragraph > paragraphs.length)
        throw new BadRequestException('Nenhum valor informado válido.');
    
        return paragraphs[paragraph-1];
    }

    helpUsMakeADonation() {
        return 'Escaneie o código QR ou copie o código abaixo e cole no aplicativo do seu banco para fazer um pix de qualquer valor.'
    }

    simiosGroup(paragraph: number) {
        const paragraphs = [
            'Somos um coletivo dedicado ao desenvolvimento profissional, comprometido em aprimorar as habilidades dos colaboradores por meio de  projetos voluntários abrangentes, com foco em temáticas sociais, ambientais e outros.',
            'O projeto consiste na criação e desenvolvimento de plataformas digitais para ONGs necessitadas. Reformulamos sites já existentes ou construímos novos a partir do zero, com a intenção de trazer visibilidade e facilitar o contato com o público, e o engajamento de pessoas interessadas em doar ou se voluntariar.'
        ];

        if(paragraph < 1 || paragraph > paragraphs.length)
        throw new BadRequestException('Nenhum valor informado válido.');
    
        return paragraphs[paragraph-1];
    }
}
