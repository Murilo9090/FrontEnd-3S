import "./produtospage.css";
import { useEffect, useState } from "react";
const Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("hero.png");
    useEffect(() => {
        const getDados = async () => {
            try {
                const retornoAPI = await fetch("http://localhost:3000/produtos");
                const dados = await retornoAPI.json();
                setListaProdutos(dados);
            } catch (error) {
                console.log(error);
            }
        };

        getDados();
    }, []);


    const cadastrar = async (e) => {
        e.preventDefault();
        if (titulo.trim().length === "" || descricao.trim().length === "" || isNaN(preco)) {
            alert("Preencha todos os campos!");
            return;
        }
        const objProduto = {
            nome: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
        };
        console.log(objProduto);
        const retornoAPI = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(objProduto),
        });
        const produtoCadastrado = await retornoAPI.json();
        setListaProdutos([...listaProdutos, produtoCadastrado]);
    }
    const deletar = async (id) => {
        const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        });
        const produtoCadastrado = await retornoAPI.json();
        setListaProdutos(listaProdutos.filter(produto => produto.id !== id));
    }

    return (
        <main className="produtos">
            <h1 className="texto-produto">Cadastro de Produtos</h1>
            <div className="div-cadastro">
                <form action="" className="cadastro-formulario">
                    <input className="input-formulario" type="text" placeholder="Nome do Produto" id="titulo" onChange={(e) => { setTitulo(e.target.value) }} />
                    <input className="input-formulario input-descricao" type="text" placeholder="Descrição" id="descricao" onChange={(e) => { setDescricao(e.target.value) }} />
                    <input className="input-formulario" type="number" placeholder="Preço" id="preco" onChange={(e) => { setPreco(parseFloat(e.target.value)) }} />
                    <label className="label_upload" htmlFor="arquivo">Imagem do Produto</label>
                    <input className="input-formulario btn_upload" id="arquivo" type="file" placeholder="Imagem do Produto" onChange={(e) => { setImagem("/" + e.target.files[0].name) }} />
                    <button className="btn_cadastrar" onClick={cadastrar}>Cadastrar</button>
                </form>
                <div className="div-produto">
                    <section className="secao-produto">
                        {listaProdutos.map((produto) => (
                            <article key={produto.id} className="card__produto">
                                <img src={produto.imagem} className="img_produto" />
                                <h2>{produto.nome}</h2>
                                <span><strong>Descrição:</strong>{produto.descricao}</span>
                                <span><strong>Preço:</strong>{produto.preco}</span>
                                <button className="btn_deletar" onClick={(e) => {
                                    e.preventDefault()
                                    deletar(produto.id)
                                }}>
                                Deletar</button>
                            </article>
                        ))}
                        {/* <article className="card__produto">
                        <img src={imagem} className="img_produto"/>
                        <span><strong>Nome:</strong>Bomba</span>
                        <span><strong>Descrição:</strong>Bomba legal</span>
                        <span><strong>Preço:</strong>R$67,67</span>
                    </article> */}
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Produtos;