import React from 'react';
import Project from '../components/Project/Project.jsx';
import LogoJavaScript from '/logo-javascript.png';
import LogoReact from '/logo-react.png';
import LogoNext from '/logo-next.png';
import LogoPostgres from '/logo-postgres.png';
import LogoNode from '/logo-node.png';
import LogoExpress from '/logo-express.png';
import LogoMongodb from '/logo-mongodb.png';
import LogoGit from '/logo-git.png';
import LogoFigma from '/logo-figma.png';

const Projects = () => {
  return (
    <div className='container-projects'>
        <h1 className='topico'>Projetos</h1>

        <Project
            nome="RecruitSync"
            foto="/foto-recruitsync.jpeg"
            descricao="O RecruitSync é um sistema desenvolvido para gerenciar e otimizar a seleção de candidatos em projetos de pesquisa e extensão. Com ele, o coordenador do projeto pode acessar os dados dos inscritos, avaliá-los em diferentes etapas e selecionar os mais aptos para integrar a sua equipe. Esse software foi criado para atender a necessidade de um professor que enfrentou dificuldades na formalização desse processo, o sistema se tornou uma solução eficiente para tornar a seleção mais organizada, ágil e precisa. Seu desenvolvimento foi feito por meio de tecnologias modernas e integração com banco de dados."
            iconesTec={[LogoJavaScript, LogoReact, LogoNext, LogoPostgres, LogoGit, LogoFigma]}
        />

        <Project
            nome="Clone Spotify"
            foto="/foto-recruitsync.jpeg"
            descricao="Este projeto de clone teve como objetivo recriar a experiência do Spotify, utilizando diversas tecnologias modernas e integração com banco de dados. Esse sistema permite que os usuários busquem músicas e artistas, reproduzam faixas e desfrutem de uma experiência imersiva. Desenvolvido durante a Jornada FullStack da Hashtag Treinamentos, este projeto foi muito importante por ampliar meus conhecimentos em desenvolvimento FullStack."
            iconesTec={[LogoJavaScript, LogoReact, LogoNode, LogoExpress, LogoMongodb, LogoGit]}
        />

    </div>
  )
}

export default Projects