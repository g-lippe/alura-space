import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";
import Rodape from "../../componentes/Rodape";
import styles from './PaginaInicial.module.scss';

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <div className={styles.principal}>
          <Menu />
          <Banner />
        </div>
      </main>
      <div>
        <Galeria />
      </div>
      <Rodape />
    </>
  )
}