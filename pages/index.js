import Link from 'next/link'
import styleBotao from '../styles/botao.module.css'
import styleEstilo from '../styles/estilo.module.css'

export default function Home() {
  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página inicial do curso de desenvolvimento web." />
        <title>Curso de Desenvolvimento Web</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <div className={styleEstilo.container}>
          <div className={[styleEstilo.conteudo, styleEstilo.cinza, styleEstilo.arredondar].join(" ")}>
            <Link href="microcamp.com.br" className={styleEstilo.cinza}>
              <img className={[styleEstilo.cinza, styleEstilo.arredondar].join(" ")} src="/logo.jpg" type="jpg" alt="Logo Microcamp" />
            </Link>
            <h1 className={styleEstilo.cinza} >Seja bem vindo!</h1>
            <p className={styleEstilo.cinza-escuro}  id="altera">Clique em começar para aprender! 👇</p>
            <Link className={styleBotao.botao} href="/pages/aulas.js">Começar</Link>
          </div>
        </div>
      </div>
  );
}
